import React, { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

// InputTodo component for adding todo
const InputTodo = () => {
  // title state
  const [title, setTitle] = useState("");
  //   extracting helper function for adding todo from useTodos()
  const { addTodoAction } = useTodos();

  // handle submit helper function
  const handleSubmit = () => {
    if (title !== "") {
      addTodoAction(title);
      setTitle("");
    } else {
      alert("please enter something before adding");
    }
  };

  return (
    <div>
      <input
        type={"text"}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="enter todo"
      />
      {/* attaching onClick handler */}
      <button onClick={handleSubmit}>add todo</button>
    </div>
  );
};

export default InputTodo;
