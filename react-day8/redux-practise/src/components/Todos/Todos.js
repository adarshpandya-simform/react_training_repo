import { useEffect, useState } from "react";
import { useTodos } from "../../store/todos.helper";

// Todos component which uses useTodos
// uses thunk functions
const Todos = () => {
  // extracting out state and functionality from useTodos
  const { todos, loading, fetchTodos, addNewTodo, deleteTodo, checkTodo } =
    useTodos();
  const [title, setTitle] = useState("");

  // fetching todos on component mount
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function to add todo
  const handleAddClick = () => {
    if (title !== "") {
      addNewTodo(title);
      setTitle("");
    } else {
      alert("please enter something and then add");
    }
  };

  // function to delete todo
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  // function to check/complete-incomplete todo
  const handleChecked = async (id, completed) => {
    checkTodo(id, completed);
  };

  return (
    <div>
      <h1>todos component</h1>
      {/* conditional rendering */}
      {loading && <p>loading...</p>}

      {/* conditional rendering and todo mapping */}
      {todos.length !== 0 &&
        !loading &&
        todos.map((todo) => (
          <div key={todo.id}>
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => handleChecked(todo.id, e.target.checked)}
            />
            <span
              onClick={() => {
                handleDelete(todo.id);
              }}
              style={todo.completed ? { textDecoration: "line-through" } : {}}
            >
              {todo.title}
            </span>
          </div>
        ))}
      {/* JSX to add todo */}
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
