import { ThemeProvider } from "@mui/material";
import { createContext, FC, useState } from "react";
import { getTheme } from "../theme/theme";

// defining context
export const DarkThemeContext = createContext<{
  mode: "light" | "dark";
  toggleMode: () => void;
}>({ mode: "light", toggleMode: () => {} });

// defining and exporting provider
export const DarkThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // passing mode and toggleMode
  return (
    <DarkThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>
    </DarkThemeContext.Provider>
  );
};
