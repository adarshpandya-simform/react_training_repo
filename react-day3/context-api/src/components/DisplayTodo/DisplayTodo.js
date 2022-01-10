import React, { useContext } from "react";
import { CHECK_TODO, DELETE_TODO } from "../../context/todo.action";
import { TodosContext } from "../../context/todo.context";

const DisplayTodo = () => {
  // using global state
  const { state, dispatch } = useContext(TodosContext);

  // dispatching complete_todo action
  const checkHandler = (e, id) => {
    dispatch({
      type: CHECK_TODO,
      payload: { id, completed: e.target.checked },
    });
  };

  // dispatching delete action with id
  const deleteHandler = (id) => {
    dispatch({ type: DELETE_TODO, payload: { id } });
  };

  return (
    <div>
      <p>todos</p>
      {/* mapping through all todos */}
      {state.todos.map((todo) => (
        // checkbox for marking todo complete/incomplete
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
          {/* delete button */}
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

export default DisplayTodo;
