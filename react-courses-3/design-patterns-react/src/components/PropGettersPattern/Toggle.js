import { useState } from "react";
import { callAllFunctions } from "./utils/callAllFunctions";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const propGetters = ({ onClick, ...props } = {}) => {
    return {
      onClick: callAllFunctions(onClick, () => {
        setToggle((prevToggle) => !prevToggle);
      }),
      setToggle: () => {
        setToggle((prevToggle) => !prevToggle);
      },
      "aria-expanded": toggle,
      ...props,
    };
  };
  return children({ toggle, propGetters });
};

export default Toggle;
