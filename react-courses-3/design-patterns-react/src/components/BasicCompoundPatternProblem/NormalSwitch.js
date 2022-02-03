import { useState } from "react";
import "./NormalSwitch.css";

const NormalSwitch = ({ onToggle }) => {
  const [toggle, setToggle] = useState(false);

  const onToggleHandler = () => {
    setToggle((prevToggle) => !prevToggle);
    onToggle();
  };

  return (
    <div className={`outer-container ${toggle ? "container-active" : ""}`}>
      <div onClick={onToggleHandler} className="inner-switch"></div>
    </div>
  );
};

export default NormalSwitch;
