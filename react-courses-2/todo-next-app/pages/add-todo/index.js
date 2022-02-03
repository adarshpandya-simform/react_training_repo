import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

// AddTodoPage @ localhost:{port}/add-todo
const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  // extracting addTodo dispatcher function
  const { addTodo } = useTodos();

  // todo onSubmit handler
  const handleSubmit = () => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("please enter something");
    }
  };

  return (
    <div className="container">
      <input
        type={"text"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        placeholder="enter todo"
      />
      {/* attaching onClick handler to submit todo */}
      <button onClick={handleSubmit}>add todo</button>
    </div>
  );
};

export default AddTodoPage;
