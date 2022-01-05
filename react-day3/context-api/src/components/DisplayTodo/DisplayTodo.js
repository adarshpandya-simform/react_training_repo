import React, { useContext, useState } from "react";
import { CHECK_TODO, DELETE_TODO } from "../../context/todo.action";
import { TodosContext } from "../../context/todo.context";

const DisplayTodo = () => {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <div>
      <p>todos</p>
    </div>
  );
};

export default DisplayTodo;
