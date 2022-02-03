import { useTodos } from "../../hooks/useTodos";
import Link from "next/link";

// TodosPage : localhost:{port}/todos
const TodosPage = () => {
  // extracing state and dispatchers
  const { todos, deleteTodo, checkTodo } = useTodos();

  // helper funtion to delete todo
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  // helper funtion to check/uncheck todo
  const handleCheck = (id, completed) => {
    checkTodo(id, completed);
  };

  return (
    <div className="container">
      {/* conditionally rendering todos with length->0 condition */}
      {todos.length === 0 && <p>yayy! no todos!!!</p>}
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => {
              handleCheck(todo.id, e.target.checked);
            }}
          />

          {/* linking /todos/{todoId} oage */}
          <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
          {/* attaching delete handler on button */}
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
