import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

// AddTodoPage for adding todo
const AddTodoPage = () => {
  const { addTodo, isLoading } = useStore((state) => state);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // helper fn to handle add todos
  const handleAddTodos = async () => {
    if (title !== "" && description !== "") {
      await addTodo({ title, description });
      navigate("/todos");
    } else {
      alert("please enter something before adding");
    }
  };

  // showing loading state
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <input
        type={"text"}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="enter name"
      />
      <br />
      <br />
      <textarea
        cols={100}
        rows={8}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="enter description"
      />
      <br />
      <br />
      <button onClick={handleAddTodos}>add todo</button>
    </div>
  );
};

export default AddTodoPage;
