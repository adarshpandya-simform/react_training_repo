import { useObserver } from "mobx-react";
import { useState } from "react";
import { useTodos } from "../../context/todo.context";

// InputTodo component
const InputTodo = () => {
  // extracting addTodo from useTodos
  const { addTodo } = useTodos();
  // title state for input tag
  const [title, setTitle] = useState("");

  // helper for adding todo
  const handleSubmit = () => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("please enter something");
    }
  };

  // useObserver for state changes reflections
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
