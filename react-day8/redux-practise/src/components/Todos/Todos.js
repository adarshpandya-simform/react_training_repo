import { fetchTodos } from "../../store/todo.thunk";
import { useTodos } from "../../store/todos.helper";

const Todos = () => {
  const { todos, loading, dispatch } = useTodos();
  console.log(todos, loading);

  const handleClick = () => {
    dispatch(fetchTodos());
  };

  const handleAddClick = async () => {};

  return (
    <div>
      <h1>todos component</h1>
      {loading && <p>loading...</p>}
      {todos.length !== 0 &&
        !loading &&
        todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
      <button onClick={handleClick}>load todos</button>
      <button onClick={handleAddClick}>add todo</button>
    </div>
  );
};

export default Todos;
