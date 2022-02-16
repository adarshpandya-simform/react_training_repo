import { createContext, useReducer } from "react";
import { todoReducer } from "./reducer";

// defining initial state
const initialState = { todos: [], loading: false };

// creating and exporting context
export const TodoContext = createContext(initialState);

// creating and exporting provider
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
