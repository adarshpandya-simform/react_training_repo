import { createContext, useReducer } from "react";
import { reducer } from "./todo.reducer";
const initialState = { todos: [] };

export const TodosContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
