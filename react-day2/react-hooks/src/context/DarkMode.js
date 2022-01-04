import React, { createContext, useState } from "react";

export const DarkThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const DarkThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <DarkThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
