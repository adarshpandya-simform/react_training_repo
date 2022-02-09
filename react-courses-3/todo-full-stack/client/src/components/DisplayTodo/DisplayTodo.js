import { useTodos } from "../../hooks/useTodos";

const DisplayTodo = () => {
  const { todos, loading, deleteTodo, updateTodo } = useTodos();

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleUpdate = (id, title, completed) => {
    updateTodo(id, title, completed);
  };

  return (
    <div>
      {loading && <p>todos are loading...</p>}
      {!loading && todos.length === 0 && <p>yayy! no todos</p>}
      {!loading &&
        todos.length !== 0 &&
        todos.map((todo) => (
          <div key={todo._id}>
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => {
                handleUpdate(todo._id, todo.title, e.target.checked);
              }}
            />
            <span>{todo.title}</span>
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
