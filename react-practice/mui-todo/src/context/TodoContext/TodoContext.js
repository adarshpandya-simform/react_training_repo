import { createContext, useReducer } from "react";
import { todoReducer } from "./todo.reducer";

// initial state
const initialState = { todos: [] };

// creating empty context
export const TodoContext = createContext(initialState);

// defining and exporting provider
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
