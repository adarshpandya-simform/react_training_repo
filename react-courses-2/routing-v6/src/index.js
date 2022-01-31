import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Wrapping App with Provider and Browser Router
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
