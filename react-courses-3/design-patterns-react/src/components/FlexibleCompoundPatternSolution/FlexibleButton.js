import { useContext } from "react";
import { ToggleContext } from "./context/ToggleContext";
import FlexibleSwitch from "./FlexibleSwitch";

const Button = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  return <FlexibleSwitch toggle={toggle} setToggle={setToggle} />;
};

export default Button;
