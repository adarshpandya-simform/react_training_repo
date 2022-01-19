import React from "react";
import { useTodoStore } from "../../context/todo.context";
import { useObserver } from "mobx-react";

const DisplayTodo = () => {
  const todoStore = useTodoStore();
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
