import { useRouter } from "next/router";
import { useTodos } from "../../hooks/useTodos";

// TodoDetails page @ localhost:{port}/todo/{id}
const TodoDetailsPage = () => {
  // extracting query param to get todoId
  const { query } = useRouter();
  // getting all todos
  const { todos } = useTodos();

  return (
    <div className="container">
      {/* finding and rendering todo with the id === query.todoId */}
      {todos.map((todo) => (
        <>
          {/* rendering details */}
          {todo.id === query.todoId && (
            <div>
              <h3>Todo Details</h3>
              <p>id: {todo.id}</p>
              <p>title: {todo.title}</p>
              <p>completed: {String(todo.completed)}</p>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default TodoDetailsPage;
