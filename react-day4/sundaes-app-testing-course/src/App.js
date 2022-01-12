import "./App.css";
import OrderEntry from "./components/OrderEntry";
import OrderSummary from "./components/OrderSummary";
import { OrderDetailsProvider } from "./contexts/order.context";
import { useState } from "react";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");
  let Component = OrderEntry;

  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <div className="container">
      <OrderDetailsProvider>
        <Component setOrderPhase={setOrderPhase} />
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
