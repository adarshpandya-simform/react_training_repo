import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkModeContext";

// custom hook for toggling theme modes
export const useDarkMode = (): {
  mode: "light" | "dark";
  toggleMode: () => void;
} => {
  const { mode, toggleMode } = useContext(DarkThemeContext);

  return { mode, toggleMode };
};
