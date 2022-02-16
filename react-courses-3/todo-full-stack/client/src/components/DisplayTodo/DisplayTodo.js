import { useTodos } from "../../hooks/useTodos";
import "./DisplayTodo.css";

// DisplayTodo Component for showing todos
const DisplayTodo = () => {
  // extracting state and dispatchers from useTodos()
  const { todos, loading, deleteTodo, updateTodo } = useTodos();

  // helper fn for deleting todo
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  // helper fn for updating todo
  const handleUpdate = (id, title, completed) => {
    updateTodo(id, title, completed);
  };

  return (
    <div className="todo-display-container">
      {/* component for loading state... */}
      {loading && <p>todos are loading...</p>}
      {/* checking empty array of todos */}
      {!loading && todos.length === 0 && <p>yayy! no todos</p>}
      {/* conditionally rendering todo list */}
      {!loading &&
        todos.length !== 0 &&
        todos.map((todo) => (
          <div className="todo-card" key={todo._id}>
            <div className="todo-info">
              <input
                type={"checkbox"}
                checked={todo.completed}
                onChange={(e) => {
                  handleUpdate(todo._id, todo.title, e.target.checked);
                }}
              />
              <span>{todo.title}</span>
            </div>
            <button
              onClick={() => {
                handleDelete(todo._id);
              }}
            >
              delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default DisplayTodo;
