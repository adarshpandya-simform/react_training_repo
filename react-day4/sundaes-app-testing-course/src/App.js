import "./App.css";
import Options from "./components/Options";
import SummaryForm from "./components/SummaryForm";

function App() {
  return (
    <div>
      <SummaryForm />
      <Options optionType={"scoops"} />
    </div>
  );
}

export default App;
