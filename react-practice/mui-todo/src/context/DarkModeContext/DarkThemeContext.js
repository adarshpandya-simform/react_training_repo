import { ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
import { getTheme } from "../../theme/theme";

// defining context
export const DarkThemeContext = createContext("light");

// defining and exporting provider
export const DarkThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

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
