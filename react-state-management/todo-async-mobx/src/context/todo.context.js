import { createContext, useContext } from "react";
import todoStore from "../store/todo.store";

export const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
