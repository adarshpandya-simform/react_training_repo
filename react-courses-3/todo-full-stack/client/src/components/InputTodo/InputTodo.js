import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

const InputTodo = () => {
  const [title, setTitle] = useState("");
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
    <div>
      <input
        type={"text"}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyUp={(e) => {
          handleKeyPress(e.key);
        }}
      />
      <button onClick={handleAdd}>add todo</button>
    </div>
  );
};

export default InputTodo;
