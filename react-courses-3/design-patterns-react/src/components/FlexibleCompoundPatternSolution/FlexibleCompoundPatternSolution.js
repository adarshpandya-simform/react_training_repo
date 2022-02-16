import React, { useState } from "react";
import { ToggleContext } from "./context/ToggleContext";
import FlexibleButton from "./FlexibleButton";
import FlexibleOff from "./FlexibleOff";
import FlexibleOn from "./FlexibleOn";

const FlexibleCompoundPatternSolution = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

FlexibleCompoundPatternSolution.Button = FlexibleButton;
FlexibleCompoundPatternSolution.On = FlexibleOn;
FlexibleCompoundPatternSolution.Off = FlexibleOff;

export default FlexibleCompoundPatternSolution;
