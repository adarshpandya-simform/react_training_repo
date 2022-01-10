import React, { useState } from "react";
import { useContext } from "react";
import { ADD_TODO } from "../../context/todo.action";
import { TodosContext } from "../../context/todo.context";

// adding todos using InputTodo component
const InputTodo = () => {
  // using global state
  const { dispatch } = useContext(TodosContext);
  const [todo, setTodo] = useState("");

  // dispatching add_todo only when 'todo' is not empty
  const todoHandler = () => {
    if (todo !== "") {
      dispatch({ type: ADD_TODO, payload: { title: todo } });
      setTodo("");
    } else {
      alert("do not add empty fields");
    }
  };

  // handling enter key
  const handleKey = (e) => {
    if (e.key === "Enter") {
      todoHandler();
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
        onKeyUp={(e) => {
          handleKey(e);
        }}
        autoFocus
      />
      {/* button to add todo in all other todos */}
      <button onClick={todoHandler}>add todo</button>
    </div>
  );
};

export default InputTodo;
