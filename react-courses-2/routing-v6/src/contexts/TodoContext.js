import { createContext, useReducer } from "react";
import { reducer } from "./todo.reducer";

let initialState = { todos: [] };

// defining Todo context
export const TodoContext = createContext({ todos: [] });

// creating Todo Provider
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
