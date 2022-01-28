import React from "react";
import { useTodos } from "../hooks/useTodos";

const DisplayTodos = () => {
  const { todos, deleteTodoAction, checkTodoAction } = useTodos();

  const handleDeleteTodo = (doc_id) => {
    deleteTodoAction(doc_id);
  };

  const handleCheckTodo = (completed, doc_id) => {
    checkTodoAction(doc_id, completed);
  };

  return (
    <div>
      {todos.lenth !== 0 &&
        todos.map((todo) => (
          <div key={todo.doc_id}>
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => handleCheckTodo(e.target.checked, todo.doc_id)}
            />
            <span>{todo.title}</span>
            <button
              onClick={() => {
                handleDeleteTodo(todo.doc_id);
              }}
            >
              delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default DisplayTodos;
