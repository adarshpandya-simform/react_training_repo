import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "add_todo/AddTodo";
import ReduxWrapper from "add_todo/ReduxWrapper";

import "./index.css";

const App = () => (
  <div>
    <AddTodo />
  </div>
);
ReactDOM.render(
  <ReduxWrapper>
    <App />
  </ReduxWrapper>,
  document.getElementById("app")
);
