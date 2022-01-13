import { useEffect, useState } from "react";
import { useTodos } from "../../store/todos.helper";

const Todos = () => {
  const { todos, loading, fetchTodosThunk, addNewTodoThunk } = useTodos();
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodosThunk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddClick = () => {
    if (title !== "") {
      addNewTodoThunk(title);
      setTitle("");
    } else {
      alert("please enter something and then add");
    }
  };

  return (
    <div>
      <h1>todos component</h1>
      {loading && <p>loading...</p>}
      {todos.length !== 0 &&
        !loading &&
        todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
      <input
        type={"text"}
        placeholder="enter todo..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={handleAddClick}>add todo</button>
    </div>
  );
};

export default Todos;
