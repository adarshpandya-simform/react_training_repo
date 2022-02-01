import { useContext } from "react";
import {
  addTodoAction,
  checkTodoAction,
  deleteTodoAction,
} from "../context/todo.action";
import { TodoContext } from "../context/TodoContext";

// custom hook to operate with todos
export const useTodos = () => {
  // getting state and dispatcher
  const { state, dispatch } = useContext(TodoContext);

  // getting state
  const todos = state.todos;

  // adding dispatcher callers in hook for add/delete/check
  const addTodo = (title) => {
    dispatch(addTodoAction(title));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const checkTodo = (id, completed) => {
    dispatch(checkTodoAction(id, completed));
  };

  // returning state and operations
  return { todos, addTodo, deleteTodo, checkTodo };
};
