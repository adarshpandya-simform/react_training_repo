import React from "react";
import { useTodos } from "../hooks/useTodos";

// DisplayTodo component to show todos plus delete/check operation
const DisplayTodos = () => {
  // extracting state and dispatcherWithActions from useTodos
  const { todos, deleteTodoAction, checkTodoAction } = useTodos();

  // helper fn for deleting todo
  const handleDeleteTodo = (doc_id) => {
    deleteTodoAction(doc_id);
  };

  // helper fn for updating todo
  const handleCheckTodo = (completed, doc_id) => {
    checkTodoAction(doc_id, completed);
  };

  return (
    <div>
      {/* conditionally rendering todos (checking length) */}
      {todos.lenth !== 0 &&
        todos.map((todo) => (
          <div key={todo.doc_id}>
            {/* attaching handler for updateTodo in onChange*/}
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={(e) => handleCheckTodo(e.target.checked, todo.doc_id)}
            />
            <span>{todo.title}</span>
            {/* attaching handler for deleteTodo on onClick*/}
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
