import React, { useContext } from "react";
import { CHECK_TODO, DELETE_TODO } from "../../context/todo.action";
import { TodosContext } from "../../context/todo.context";

const IncompleteTodos = () => {
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
      <p>incomplete todos</p>
      {state.todos
        //   filtering incomplete todos and mapping through them
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              onChange={(e) => {
                checkHandler(e, todo.id);
              }}
              checked={todo.completed}
            />
            {/* displaying todos */}
            <span
              style={todo.completed ? { textDecoration: "line-through" } : {}}
            >
              {todo.title}
            </span>
            {/* delete the todo */}
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

export default IncompleteTodos;
