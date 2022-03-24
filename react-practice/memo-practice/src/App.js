import { useState } from "react";
import "./App.css";
import { MemoizedComponent, NormalComponent } from "./components";
import MemoizedComponentTwo from "./components/MemoizedComponentTwo";
import NormalComponentTwo from "./components/NormalComponentTwo";

const App = () => {
  const [renderedCount, setRenderedCount] = useState(0);
  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("");
  console.log(`app rendered: ${renderedCount}`);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setRenderedCount((renderedCount) => renderedCount + 1);
          }}
        >
          re render app
        </button>
        <button
          onClick={() => {
            setColor(color === "red" ? "blue" : "red");
          }}
        >
          change color
        </button>
        <br />
        <input
          type={"text"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
      </div>
      <div>
        <NormalComponent color={color} />
        <MemoizedComponent color={color} />
        <NormalComponentTwo />
        <MemoizedComponentTwo />
      </div>
    </div>
  );
};

export default App;
