import { useState } from "react";

const ButtonWithCheckbox = () => {
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
      <input type="checkbox" />
    </div>
  );
};

export default ButtonWithCheckbox;
