import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

// AddTodo component for adding todos
const AddTodo = () => {
  // state for managing todo title
  const [title, setTitle] = useState("");
  // extracting addTodoAction
  const { addTodoAction } = useTodos();

  // helper fn for adding todos
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
      {/* attaching addTodo handler */}
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default AddTodo;
