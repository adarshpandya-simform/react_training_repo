import { useObserver } from "mobx-react";
import { useState } from "react";
import { useTodos } from "../../context/todo.context";

const InputTodo = () => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("please enter something");
    }
  };

  return useObserver(() => {
    return (
      <>
        <input
          type={"text"}
          placeholder="enter todo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>add todo</button>
      </>
    );
  });
};

export default InputTodo;
