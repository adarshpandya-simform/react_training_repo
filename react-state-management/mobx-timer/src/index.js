import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import timer from "./store";

// passing timer(store) in App component
ReactDOM.render(
  <React.StrictMode>
    <App timer={timer} />
  </React.StrictMode>,
  document.getElementById("root")
);
