import { useEffect, useState } from "react";
import { addTodo } from "../api/api";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("Add Todo Rendered");
  }, []);

  const handleAddTodo = async () => {
    if (title !== "") {
      const data = await addTodo(title);
      console.log(data);
      setTitle("");
    } else {
      alert("please enter something before adding");
    }
  };

  const handleEnterKeyPress = (key) => {
    if (key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <br />
      <input
        type={"text"}
        placeholder="Enter Todo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => handleEnterKeyPress(e.key)}
      />
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default AddTodoPage;
