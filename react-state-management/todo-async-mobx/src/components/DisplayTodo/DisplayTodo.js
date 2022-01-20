import { useObserver } from "mobx-react";
import { useState } from "react";
import { useTodos } from "../../context/todo.context";

// DisplayTodo component
const DisplayTodo = () => {
  // todoStore access
  const todoStore = useTodos();
  // choice state for all/completed/uncompleted choice
  const [choice, setChoice] = useState("All");

  // useObserver for obsering the state
  return useObserver(() => {
    // extracting all needed states,computed props and actions from todoStore
    const { deleteTodo, checkTodo, todos, finishedTodos, unfinishedTodos } =
      todoStore;

    return (
      <div>
        <p>Todos: </p>
        <br />
        <button
          onClick={() => {
            setChoice("All");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setChoice("Completed");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setChoice("Uncompleted");
          }}
        >
          Uncompleted
        </button>
        <br />
        <br />
        {/* conditionally checking and passing array for rendering */}
        {(choice === "All"
          ? todos
          : choice === "Completed"
          ? finishedTodos
          : unfinishedTodos
        ).map((todo) => (
          <div key={todo.id}>
            <input
              type={"checkbox"}
              checked={todo.completed}
              onChange={() => {
                checkTodo(todo.id);
              }}
            />
            <span>{todo.title}</span>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    );
  });
};

export default DisplayTodo;
