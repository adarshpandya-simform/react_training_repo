import { createContext, useReducer } from "react";
import { todoReducer } from "./todo.reducer";
import { ReactNode, Dispatch } from "react";

export type TodoReducerType = (
  state: TodoState,
  action: TodoAction
) => TodoState;

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Array<Todo>;
}

interface TodoAction {
  type: string;
  payload?: any;
}

let initialState: TodoState = { todos: [] };

export const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}>({ state: initialState, dispatch: () => {} });

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
