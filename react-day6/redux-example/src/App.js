import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <p>the value of counter {counter}</p>
      <Counter />
    </div>
  );
}

export default App;
