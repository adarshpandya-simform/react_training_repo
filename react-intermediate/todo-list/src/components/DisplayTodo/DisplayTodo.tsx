import React, { FC } from "react";
import { useTodos } from "../../context";
import "./DisplayTodo.css";

const DisplayTodo: FC = () => {
  const { deleteTodo, checkTodo, todos } = useTodos();

  const handleDelete = (id: string): void => {
    deleteTodo(id);
  };

  const handleCheck = (id: string, completed: boolean): void => {
    checkTodo(id, completed);
  };

  return (
    <div className="display-container">
      {todos.length === 0 && <p>yayy! no todos</p>}
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
