import React, { useState } from "react";
import Switch from "./Switch";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return <Switch toggle={toggle} setToggle={setToggle} />;
};

export default Toggle;
