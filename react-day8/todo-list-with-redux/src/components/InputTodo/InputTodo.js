import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    if (todo !== "") {
      dispatch(addTodo({ title: todo }));
      setTodo("");
    } else {
      alert("please enter some text");
    }
  };

  return (
    <div>
      <input
        placeholder="enter todo"
        type={"text"}
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>add</button>
    </div>
  );
};

export default InputTodo;
