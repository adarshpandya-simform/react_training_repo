import { useState } from "react";

const ButtonWithCheckbox = () => {
  const [color, setColor] = useState("yellow");
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div>
      <button
        style={{ background: color }}
        disabled={isDisabled}
        onClick={() => {
          setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
        }}
      >
        {color === "yellow" ? "change to green" : "change to yellow"}
      </button>
      <input
        type="checkbox"
        onClick={() => {
          setIsDisabled((prev) => !prev);
        }}
      />
    </div>
  );
};

export default ButtonWithCheckbox;
