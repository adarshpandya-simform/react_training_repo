import React, { FC } from "react";
import { useTodos } from "../../context";
import "./DisplayTodo.css";

// DisplayTodo component
const DisplayTodo: FC = () => {
  // fetching state and dispatcher with actions from useTodos
  const { deleteTodo, checkTodo, todos } = useTodos();

  // helper function for delete todos
  const handleDelete = (id: string): void => {
    deleteTodo(id);
  };

  // helper function for check todos
  const handleCheck = (id: string, completed: boolean): void => {
    checkTodo(id, completed);
  };

  return (
    <div className="display-container">
      {/* conditional rendering */}
      {/* show empty todos msg */}
      {todos.length === 0 && <p>yayy! no todos</p>}
      {/* mapping through todos */}
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo-info">
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => {
                handleCheck(todo.id, e.target.checked);
              }}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.title}
            </span>
          </div>
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
