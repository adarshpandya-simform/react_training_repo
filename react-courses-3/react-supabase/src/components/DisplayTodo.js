import { deleteTodo, updateTodo } from "../db/db.operations";
import { useTodos } from "../hooks/useTodos";

// DisplayTodo component:for displaying all todos
const DisplayTodo = () => {
  // extracting state and dispatchers
  const {
    loading,
    todos,
    setLoadingDispatcher,
    deleteTodoDispatcher,
    checkTodoDispatcher,
  } = useTodos();

  // handler fn for updating todos
  const handleCheckTodo = async (id, completed) => {
    const { error } = await updateTodo(id, completed);
    setLoadingDispatcher(true);
    if (error) {
      console.log("error", error);
    } else {
      checkTodoDispatcher(id, completed);
    }
    setLoadingDispatcher(false);
  };

  // handler fn for deleting todos
  const handleDeleteTodo = async (id) => {
    const { error } = await deleteTodo(id);
    setLoadingDispatcher(true);
    if (error) {
      console.log("error", error);
    } else {
      deleteTodoDispatcher(id);
    }
    setLoadingDispatcher(false);
  };

  return (
    <div>
      {/* rendering loading state */}
      {loading && <p>loading...</p>}
      {/* rendering empty state */}
      {!loading && todos.length === 0 && <p>yayy! no todos!!</p>}
      {/* mapping through todos */}
      {!loading &&
        todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => handleCheckTodo(todo.id, e.target.checked)}
            />
            <span>{todo.title}</span>
            <button
              onClick={() => {
                handleDeleteTodo(todo.id);
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
