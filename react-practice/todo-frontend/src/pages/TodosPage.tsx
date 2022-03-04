import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";

// TodosPage for showing all todos
const TodosPage: FC = (): JSX.Element => {
  const { isLoading, todos, getTodos } = useTodos();

  useEffect(() => {
    getTodos();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <Link to={`/todo/${todo._id}`}>
            <h3>{todo.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
