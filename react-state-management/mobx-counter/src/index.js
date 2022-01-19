import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { counterStore } from "./store/counter-store";

ReactDOM.render(
  <React.StrictMode>
    <App counterStore={counterStore} />
  </React.StrictMode>,
  document.getElementById("root")
);
