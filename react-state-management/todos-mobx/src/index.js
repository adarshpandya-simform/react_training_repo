import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TodoProvider } from "./context/todo.context";

// wrapping App component inside TodoProvider
ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
