import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");
  return (
    <div className="App">
      <button
        style={{ background: color }}
        onClick={() => {
          setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
        }}
      >
        {color === "blue" ? "change to red" : "change to blue"}
      </button>
    </div>
  );
}

export default App;
