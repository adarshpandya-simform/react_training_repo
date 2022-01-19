import React, { FC, useState } from "react";
import { useTodos } from "../../context";

const InputTodo: FC = () => {
  const [title, setTitle] = useState<string>("");
  const { addTodo } = useTodos();

  const handleSubmit = (): void => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("please add todo before submitting");
    }
  };

  const handleKeyPress = (key: string): void => {
    if (key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
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
