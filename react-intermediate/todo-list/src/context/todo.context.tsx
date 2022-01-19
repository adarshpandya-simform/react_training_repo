import { createContext, useReducer } from "react";
import { todoReducer } from "./todo.reducer";
import { ReactNode, Dispatch } from "react";

// defining the reducer type
export type TodoReducerType = (
  state: TodoState,
  action: TodoAction
) => TodoState;

// defining Todo type
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// defining state type
export interface TodoState {
  todos: Array<Todo>;
}

// defining action type
interface TodoAction {
  type: string;
  payload?: any;
}

// setting up initial state
let initialState: TodoState = { todos: [] };

// creating context
export const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}>({ state: initialState, dispatch: () => {} });

// creating provider with reducer and initial state
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
