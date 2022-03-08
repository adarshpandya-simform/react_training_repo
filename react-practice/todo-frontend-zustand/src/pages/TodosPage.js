import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

const TodosPage = () => {
  const { isLoading, todos } = useStore((state) => state);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <br />
      {todos &&
        todos.map((todo) => (
          <div key={todo._id}>
            <Link to={`/todo/${todo._id}`}>{todo.title}</Link>
          </div>
        ))}
    </div>
  );
};

export default TodosPage;
