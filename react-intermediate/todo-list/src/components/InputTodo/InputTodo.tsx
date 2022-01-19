import React, { FC, useState } from "react";
import { useTodos } from "../../context";
import "./InputTodo.css";

// Input component
const InputTodo: FC = () => {
  const [title, setTitle] = useState<string>("");
  // using custom hook
  const { addTodo } = useTodos();

  const handleSubmit = (): void => {
    // conditional check for empty title
    if (title !== "") {
      // dispatching action
      addTodo(title);
      setTitle("");
    } else {
      alert("please add todo before submitting");
    }
  };

  // handling pressed enter functionality
  const handleKeyPress = (key: string): void => {
    if (key === "Enter") {
      handleSubmit();
    }
  };

  // tsx
  return (
    <div className="input-container">
      <input
        type={"text"}
        placeholder="Enter todo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyUp={(e) => {
          handleKeyPress(e.key);
        }}
      />
      <button onClick={handleSubmit}>add todo</button>
    </div>
  );
};

export default InputTodo;
