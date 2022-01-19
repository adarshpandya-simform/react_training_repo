import React, { useState } from "react";
import { useTodoStore } from "../../context/todo.context";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("please add something");
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

export default InputTodo;
