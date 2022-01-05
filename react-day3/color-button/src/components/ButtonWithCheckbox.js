import { useState } from "react";

const ButtonWithCheckbox = () => {
  const [color, setColor] = useState("blue");
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
        {color === "blue" ? "change to red" : "change to blue"}
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
