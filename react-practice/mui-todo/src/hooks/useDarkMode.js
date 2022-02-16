import { useContext } from "react";
import { DarkThemeContext } from "../context";

// custom hook for dark mode
export const useDarkMode = () => {
  const { mode, toggleMode } = useContext(DarkThemeContext);

  return { mode, toggleMode };
};
