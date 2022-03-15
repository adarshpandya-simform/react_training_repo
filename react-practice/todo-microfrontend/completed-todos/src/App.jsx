import React from "react";
import ReactDOM from "react-dom";
import ReduxWrapper from "add_todo/ReduxWrapper";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: completed-todos</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(
  <ReduxWrapper>
    <App />
  </ReduxWrapper>,
  document.getElementById("app")
);
