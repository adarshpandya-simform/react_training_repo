import { createContext, useContext } from "react";
import todoStore from "../store/todo.store";

// defining a context
export const TodoContext = createContext([]);

// creating a provider
export const TodoProvider = ({ children }) => {
  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

// defining a custom hook
export const useTodos = () => useContext(TodoContext);
