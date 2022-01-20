import { useObserver } from "mobx-react";
import { useState } from "react";
import { useTodos } from "../../context/todo.context";

const DisplayTodo = () => {
  const todoStore = useTodos();
  const [choice, setChoice] = useState("All");

  return useObserver(() => {
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
