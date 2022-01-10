import "./App.css";
// import Options from "./components/Options";
import OrderEntry from "./components/OrderEntry";
import SummaryForm from "./components/SummaryForm";
import { OrderDetailsProvider } from "./contexts/order.context";

function App() {
  return (
    <div className="container">
      <OrderDetailsProvider>
        <OrderEntry />
        <SummaryForm />
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
