import { useContext, createContext } from "react";
import { createTodoStore } from "../store/todo.store";
import { useLocalObservable } from "mobx-react";

// defining context for todo
const TodoContext = createContext([]);

// defining context provider for todo
export const TodoProvider = ({ children }) => {
  const todoStore = useLocalObservable(createTodoStore);
  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

// creating custom hook for todos
export const useTodoStore = () => useContext(TodoContext);
