import React, { useState } from "react";
import { useTodoStore } from "../../context/todo.context";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  // fetching addTodo from custom hook
  const { addTodo } = useTodoStore();

  // helper function for adding todo
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
      {/* attaching on click handler */}
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default InputTodo;
