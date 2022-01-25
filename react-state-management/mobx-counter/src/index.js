import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { counterStore } from "./store/counter-store";

// passing the store as prop in App component
ReactDOM.render(
  <React.StrictMode>
    <App counterStore={counterStore} />
  </React.StrictMode>,
  document.getElementById("root")
);
