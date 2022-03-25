import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateTodo } from "../../hooks";

// InputTodo component to add todo in collection
const InputTodo = () => {
  const { push } = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutateAsync } = useCreateTodo();

  // helper fn to add todo
  const handleAddTodo = async () => {
    if (title !== "" && description !== "") {
      await mutateAsync({ title, description });
      push("/todos");
    } else {
      alert("please fill title and description");
    }
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder="Enter Todo Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter Todo Description"
        cols={26}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};

export default InputTodo;
