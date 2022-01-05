import React, { useContext } from "react";
import { CHECK_TODO, DELETE_TODO } from "../../context/todo.action";
import { TodosContext } from "../../context/todo.context";

const CompletedTodos = () => {
  const { state, dispatch } = useContext(TodosContext);

  const checkHandler = (e, id) => {
    dispatch({
      type: CHECK_TODO,
      payload: { id, completed: e.target.checked },
    });
  };

  const deleteHandler = (id) => {
    dispatch({ type: DELETE_TODO, payload: { id } });
  };

  return (
    <div>
      <p>completed todos</p>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            onChange={(e) => {
              checkHandler(e, todo.id);
            }}
            checked={todo.completed}
          />
          <span
            style={todo.completed ? { textDecoration: "line-through" } : {}}
          >
            {todo.title}
          </span>
          <button
            onClick={() => {
              deleteHandler(todo.id);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default CompletedTodos;
