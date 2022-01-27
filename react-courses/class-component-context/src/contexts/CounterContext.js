import { createContext, useState } from "react";

let initialState = { count: 0 };
export const CounterContext = createContext(initialState);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(initialState.count);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
