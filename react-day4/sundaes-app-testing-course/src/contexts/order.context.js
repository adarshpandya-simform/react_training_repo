import { useContext, createContext, useState, useMemo, useEffect } from "react";

// create context
export const OrderContext = createContext();

// create custom hook
export const useOrderDetails = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrderDetails must be within OrderDetails provider");
  }
  return context;
};

// prices
const pricePerItem = {
  scoops: 2,
  toppings: 1.5,
};

// count function
const calculateSubtotal = (optionType, optionCounts) => {
  let optionCount = 0;
  for (const iterator of optionCounts[optionType].values()) {
    optionCount += iterator;
  }
  return optionCount * pricePerItem[optionType];
};

// create provider
export const OrderDetailsProvider = (props) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });
  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const scoopsSubTotal = calculateSubtotal("scoops", optionCounts);
    const toppingsSubTotal = calculateSubtotal("toppings", optionCounts);
    const grandTotal = scoopsSubTotal + toppingsSubTotal;
    setTotals({
      scoops: scoopsSubTotal,
      toppings: toppingsSubTotal,
      grandTotal,
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, +newItemCount);

      setOptionCounts(newOptionCounts);
    }
    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);

  return <OrderContext.Provider value={value} {...props} />;
};
