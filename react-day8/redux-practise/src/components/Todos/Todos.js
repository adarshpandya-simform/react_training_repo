import { useEffect, useState } from "react";
import { useTodos } from "../../store/todos.helper";

const Todos = () => {
  const { todos, loading, fetchTodos, addNewTodo, deleteTodo } = useTodos();
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddClick = () => {
    if (title !== "") {
      addNewTodo(title);
      setTitle("");
    } else {
      alert("please enter something and then add");
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleChecked = async (id, completed) => {};

  return (
    <div>
      <h1>todos component</h1>
      {loading && <p>loading...</p>}
      {todos.length !== 0 &&
        !loading &&
        todos.map((todo) => (
          <div
            onClick={() => {
              handleDelete(todo.id);
            }}
            key={todo.id}
          >
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => handleChecked(todo.id, e.target.checked)}
            />
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
