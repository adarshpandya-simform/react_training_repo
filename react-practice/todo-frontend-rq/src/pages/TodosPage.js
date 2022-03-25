import { Helmet } from "react-helmet";
import { useTodos } from "../hooks";
import { Link } from "react-router-dom";

// TodosPage for showing all todos
const TodosPage = () => {
  const { data, isLoading } = useTodos();

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="page-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Todos App | Todos Page({`${data.length}`})</title>
        <meta name="description" content="this is list of todos" />
      </Helmet>
      <h2>Todos</h2>
      {data &&
        data.length !== 0 &&
        data.map((todo) => (
          <div key={todo._id}>
            <Link to={`/todo/${todo._id}`}>{todo.title}</Link>
          </div>
        ))}
    </div>
  );
};

export default TodosPage;
