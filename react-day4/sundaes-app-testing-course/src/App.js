import "./App.css";
import Options from "./components/Options";
import OrderEntry from "./components/OrderEntry";
import SummaryForm from "./components/SummaryForm";

function App() {
  return (
    <div>
      <SummaryForm />
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <OrderEntry />
    </div>
  );
}

export default App;
