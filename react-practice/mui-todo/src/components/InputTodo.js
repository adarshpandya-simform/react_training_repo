import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const InputTodo = () => {
  const { addTodoDispatcher } = useTodos();
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title !== "") {
      addTodoDispatcher(title);
      setTitle("");
    } else {
      console.log("please enter something");
    }
  };

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        type={"text"}
        value={title}
        placeholder="Enter Todo"
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={({ key }) => {
          handleKeyPress(key);
        }}
      />
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default InputTodo;
