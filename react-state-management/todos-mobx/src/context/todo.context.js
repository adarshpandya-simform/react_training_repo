import { useContext, createContext } from "react";
import { createTodoStore } from "../store/todo.store";
import { useLocalObservable, useLocalStore } from "mobx-react";

const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const todoStore = useLocalObservable(createTodoStore);
  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoContext);
