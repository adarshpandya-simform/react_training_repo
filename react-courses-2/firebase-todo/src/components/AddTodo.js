import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { addTodoAction } = useTodos();

  const handleAddTodo = async () => {
    if (title !== "") {
      addTodoAction(title);
      setTitle("");
    } else {
      alert("please enter something");
    }
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder="enter todo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default AddTodo;
