import React from "react";
import { useTodoStore } from "../../context/todo.context";
import { useObserver } from "mobx-react";

const DisplayTodo = () => {
  // accessing store
  const todoStore = useTodoStore();

  // using useObserver hook for fetching
  return useObserver(() => (
    <>
      {todoStore.todos.map((todo) => (
        <div key={todo.id}>
          <p onClick={() => todoStore.removeTodo(todo.id)}>{todo.title}</p>
        </div>
      ))}
    </>
  ));
};

export default DisplayTodo;
