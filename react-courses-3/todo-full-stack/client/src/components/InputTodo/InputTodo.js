import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import "./InputTodo.css";

// InputTodo component for adding todos
const InputTodo = () => {
  const [title, setTitle] = useState("");
  // extracting dispatcher from useTodos()
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("please provide input");
    }
  };

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todo-input-container">
      <div className="todo-input-and-btn">
        <input
          type={"text"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyUp={(e) => {
            handleKeyPress(e.key);
          }}
          placeholder="Enter Todo..."
        />
        <button onClick={handleAdd}>add todo</button>
      </div>
    </div>
  );
};

export default InputTodo;
