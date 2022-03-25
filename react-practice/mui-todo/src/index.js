import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkThemeProvider, TodoProvider } from "./context";
import "./index.css";

// Wrapped App inside Todo and DarkTheme Providers
ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
