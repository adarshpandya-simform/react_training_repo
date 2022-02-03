import React, { useState } from "react";
import Button from "./Button";
import Off from "./Off";
import On from "./On";

const BasicCompoundPatternSolution = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return React.Children.map(children, (childElement) => {
    return React.cloneElement(childElement, {
      toggle,
      setToggle,
    });
  });
};

BasicCompoundPatternSolution.Button = Button;
BasicCompoundPatternSolution.On = On;
BasicCompoundPatternSolution.Off = Off;

export default BasicCompoundPatternSolution;
