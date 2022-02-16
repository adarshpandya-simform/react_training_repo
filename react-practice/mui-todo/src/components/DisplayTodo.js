import { useTodos } from "../hooks/useTodos";

const DisplayTodo = () => {
  const { todos, deleteTodoDispatcher, checkTodoDispatcher } = useTodos();

  const handleDeleteTodo = (id) => {
    deleteTodoDispatcher(id);
  };

  const handleCheckTodo = (id, completed) => {
    checkTodoDispatcher(id, completed);
  };

  return (
    <div>
      {todos.length === 0 && <p>No Todos! Enjoy Your Day!!!</p>}
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type={"checkbox"}
            checked={todo.completed}
            onChange={(e) => {
              handleCheckTodo(todo.id, e.target.checked);
            }}
          />
          <span>{todo.title}</span>
          <button
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayTodo;
