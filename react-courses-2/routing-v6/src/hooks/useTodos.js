import { useContext } from "react";
import { addTodo, checkTodo, deleteTodo } from "../contexts/todo.actions";
import { TodoContext } from "../contexts/TodoContext";

// custom hook for performing todo related operations
export const useTodos = () => {
  // fetching state,dispatch from useContext
  const { state, dispatch } = useContext(TodoContext);

  // get the todos from state
  const getTodos = state.todos;

  // addingTodo dispatcher helper function
  const addTodoAction = (title) => {
    dispatch(addTodo(title));
  };

  // deleteTodo dispatcher helper function
  const deleteTodoAction = (id) => {
    dispatch(deleteTodo(id));
  };

  // checkTodo dispatcher helper function
  const checkTodoAction = (id, completed) => {
    dispatch(checkTodo(id, completed));
  };

  // returning object with helper functions
  return { getTodos, addTodoAction, checkTodoAction, deleteTodoAction };
};
