import React, { useState } from "react";
import { useContext } from "react";
import { ADD_TODO } from "../../context/todo.action";
import { TodosContext } from "../../context/todo.context";

const Inputtodo = () => {
  const { _, dispatch } = useContext(TodosContext);
  const [todo, setTodo] = useState("");

  const todoHandler = () => {
    if (todo !== "") {
      dispatch({ type: ADD_TODO, payload: { title: todo } });
    } else {
      alert("do not add empty fields");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={todoHandler}>add todo</button>
    </div>
  );
};

export default Inputtodo;
