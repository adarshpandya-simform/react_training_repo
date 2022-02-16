import { useState } from "react";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const propCollections = {
    getSwitchProps: {
      setToggle: () => {
        setToggle((prev) => !prev);
      },
      "aria-expanded": toggle,
    },
    getButtonProps: {
      onClick: () => {
        setToggle((prev) => !prev);
      },
      "aria-expanded": toggle,
    },
  };
  return children({ toggle, getHelperProps: propCollections });
};

export default Toggle;
