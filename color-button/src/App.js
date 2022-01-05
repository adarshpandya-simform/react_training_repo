import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <button
        style={{ background: color }}
        onClick={() => {
          setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
        }}
      >
        {color === "blue" ? "change to red" : "change to blue"}
      </button>
      <p> counter component</p>
      <Counter />
    </div>
  );
}

export default App;
