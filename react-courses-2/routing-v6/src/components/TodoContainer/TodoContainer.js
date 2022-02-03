import React from "react";
import DisplayTodo from "../DisplayTodo/DisplayTodo";
import InputTodo from "../InputTodo/InputTodo";

// TodoContainer component
const TodoContainer = () => {
  // rendering InputTodo and DisplayTodo component
  return (
    <>
      <InputTodo />
      <DisplayTodo />
    </>
  );
};

export default TodoContainer;
