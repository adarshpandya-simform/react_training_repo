import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkThemeProvider } from "./context/DarkMode";

// wraping App component with
// DarkThemeProvider so all components can use theme
ReactDOM.render(
  <React.StrictMode>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
