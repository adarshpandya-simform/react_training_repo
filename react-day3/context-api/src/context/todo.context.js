import { createContext, useReducer } from "react";
import { reducer } from "./todo.reducer";
const initialState = { todos: [] };

// creating initial context with 'createContext'
export const TodosContext = createContext(initialState);

// this component will be wrapped around App component
// App will become the 'children' for TodoProvider
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
