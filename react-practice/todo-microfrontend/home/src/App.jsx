import React from "react";
import ReactDOM from "react-dom";
import Header from "layout/Header";
import Footer from "layout/Footer";
import ReduxWrapper from "add_todo/ReduxWrapper";
import AddTodo from "add_todo/AddTodo";
import CompletedTodos from "completed_todos/CompletedTodos";
import IncompleteTodos from "incompleted_todos/IncompleteTodos";
import "./index.css";

const App = () => (
  <div>
    <Header />
    <br />
    <AddTodo />
    <br />
    <CompletedTodos />
    <br />
    <IncompleteTodos />
    <br />
    <Footer />
  </div>
);
ReactDOM.render(
  <ReduxWrapper>
    <App />
  </ReduxWrapper>,
  document.getElementById("app")
);
