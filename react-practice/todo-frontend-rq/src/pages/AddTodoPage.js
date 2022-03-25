import { useState } from "react";
import { Helmet } from "react-helmet";
import { useCreateTodo } from "../hooks";

// AddTodoPage for adding todos
const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutateAsync, isLoading } = useCreateTodo();

  const handleAddTodo = async () => {
    if (title !== "" && description !== "") {
      await mutateAsync({ title, description });
    } else {
      alert("please add title and description before adding");
    }
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="page-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Todos App | Add Todos</title>
        <meta name="description" content="this page is for adding todos" />
      </Helmet>
      <h2>Add a todo</h2>
      <br />
      <input
        type={"text"}
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type={"text"}
        placeholder="Enter todo description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default AddTodoPage;
