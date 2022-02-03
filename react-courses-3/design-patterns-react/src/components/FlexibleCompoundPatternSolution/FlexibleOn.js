import { useContext } from "react";
import { ToggleContext } from "./context/ToggleContext";

const FlexibleOn = ({ children }) => {
  const { toggle } = useContext(ToggleContext);
  return toggle ? <p>{children}</p> : null;
};

export default FlexibleOn;
