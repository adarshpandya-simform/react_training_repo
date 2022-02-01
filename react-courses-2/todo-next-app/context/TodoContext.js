import { createContext, useReducer } from "react";
import { reducer } from "./todo.reducer";

// creating initial state
const initialState = { todos: [] };

// defining TodoContext
export const TodoContext = createContext(initialState);

// creating Provider for Todos
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
