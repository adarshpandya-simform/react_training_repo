import { useContext } from "react";
import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.action";
import { Todo, TodoContext } from "./todo.context";

// defining a helper action for addTodo
export const addTodoAction = (
  title: string
): { type: string; payload: string } => {
  return {
    type: ADD_TODO,
    payload: title,
  };
};

// defining a helper action for deleteTodo
export const deleteTodoAction = (
  id: string
): { type: string; payload: { id: string } } => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

// defining a helper action for checkTodo
export const checkTodoAcion = (
  id: string,
  completed: boolean
): { type: string; payload: { id: string; completed: boolean } } => {
  return {
    type: CHECK_TODO,
    payload: { id, completed },
  };
};

// creating a custom hook for todos
export const useTodos = (): {
  todos: Array<Todo>;
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  checkTodo: (id: string, completed: boolean) => void;
} => {
  const { state, dispatch } = useContext(TodoContext);

  let todos: Array<Todo> = state.todos;

  const addTodo = (title: string): void => {
    dispatch(addTodoAction(title));
  };

  const deleteTodo = (id: string): void => {
    dispatch(deleteTodoAction(id));
  };

  const checkTodo = (id: string, completed: boolean) => {
    dispatch(checkTodoAcion(id, completed));
  };

  return { todos, addTodo, deleteTodo, checkTodo };
};
