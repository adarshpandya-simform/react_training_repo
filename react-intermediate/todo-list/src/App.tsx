import React, { FC } from "react";
import { DisplayTodo, InputTodo } from "./components";
import "./App.css";

// App component
const App: FC = () => {
  return (
    // rendering InputTodo and DisplayTodo Component
    <div className="todo-app-container">
      <div className="todo-app-input">
        <InputTodo />
      </div>
      <div className="todo-app-display">
        <DisplayTodo />
      </div>
    </div>
  );
};

export default App;
