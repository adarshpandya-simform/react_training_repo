import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { insertTodo } from "../db/db.operations";

// InputTodo component for inserting todo
const InputTodo = () => {
  const [title, setTitle] = useState("");
  // extracting dispatchers from useTodos()
  const { addTodoDispatcher, setLoadingDispatcher, loading } = useTodos();

  // handler fn for adding todo
  const handleAddTodo = async () => {
    if (title !== "") {
      const { data, error } = await insertTodo(title, false);
      setLoadingDispatcher(true);
      if (error) {
        console.log(error);
      } else {
        addTodoDispatcher(data[0]);
        setTitle("");
      }
      setLoadingDispatcher(false);
    } else {
      alert("please enter something");
    }
  };

  // handler fn for pressing Enter key
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
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          handleKeyPress(e.key);
        }}
        placeholder="Enter todo..."
        disabled={loading}
      />
      <button disabled={loading} onClick={handleAddTodo}>
        add todo
      </button>
    </div>
  );
};

export default InputTodo;
