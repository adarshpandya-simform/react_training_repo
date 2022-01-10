import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import CounterUsingConnect from "./components/CounterUsingConnect";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <p>the value of counter {counter}</p>
      <Counter />
      <CounterUsingConnect />
    </div>
  );
}

export default App;
