import { useState } from "react";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return children({ toggle, setToggle });
};

export default Toggle;
