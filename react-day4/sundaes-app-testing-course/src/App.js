import "./App.css";
// import Options from "./components/Options";
import OrderEntry from "./components/OrderEntry";
import SummaryForm from "./components/SummaryForm";
import { OrderDetailsProvider } from "./contexts/order.context";

function App() {
  return (
    <div>
      <OrderDetailsProvider>
        <SummaryForm />
        {/* <Options optionType={"scoops"} />
        <Options optionType={"toppings"} /> */}
        <OrderEntry />
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
