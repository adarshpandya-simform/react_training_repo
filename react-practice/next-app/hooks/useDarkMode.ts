import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkModeContext";

export const useDarkMode = (): {
  mode: "light" | "dark";
  toggleMode: () => void;
} => {
  const { mode, toggleMode } = useContext(DarkThemeContext);

  return { mode, toggleMode };
};
