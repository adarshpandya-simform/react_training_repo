import React, { FC } from "react";
import { useTodos } from "../../context";

const DisplayTodo: FC = () => {
  const { deleteTodo, checkTodo, todos } = useTodos();

  const handleDelete = (id: string): void => {
    deleteTodo(id);
  };

  const handleCheck = (id: string, completed: boolean): void => {
    checkTodo(id, completed);
  };

  return (
    <div>
      {todos.length === 0 && <p>yayy! no todos</p>}
      {todos.map((todo) => (
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
