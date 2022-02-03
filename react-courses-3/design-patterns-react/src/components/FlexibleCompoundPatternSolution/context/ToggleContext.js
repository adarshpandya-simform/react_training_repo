import { createContext } from "react";

export const ToggleContext = createContext({
  toggle: false,
  setToggle: () => {},
});
