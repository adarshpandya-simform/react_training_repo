import React from "react";
import { useTodos } from "../../hooks/useTodos";

// Display Todo component
const DisplayTodo = () => {
  // extracting useful state and dispatchers from useTodos
  const { getTodos, deleteTodoAction, checkTodoAction } = useTodos();

  // helper functions
  const handleDelete = (id) => {
    deleteTodoAction(id);
  };

  const handleCheck = (id, completed) => {
    checkTodoAction(id, completed);
  };

  return (
    <div>
      {/* Condtionally rendering todos with empty condition */}
      {getTodos.length === 0 && <p>yayy! no todos left</p>}
      {getTodos.map((todo) => (
        <div key={todo.id}>
          <input
            type={"checkbox"}
            checked={todo.completed}
            onChange={(e) => {
              handleCheck(todo.id, e.target.checked);
            }}
          />
          <span>{todo.title}</span>
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

export default DisplayTodo;
