import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";
import "./index.css";

// wrapped: App component inside TodoProvider
ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
