import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "./context/todo.context";
import "./index.css";

// wrapping App with TodoProvider so it can use global state
// wrapping App also with Browser Router so that our app can use
// react-router-dom
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
