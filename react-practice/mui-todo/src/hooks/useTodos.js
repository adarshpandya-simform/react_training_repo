import { useContext } from "react";
import {
  addTodo,
  checkTodo,
  deleteTodo,
} from "../context/TodoContext/todo.actions";
import { TodoContext } from "../context/";

// custom hook for all todo operations
export const useTodos = () => {
  const { state, dispatch } = useContext(TodoContext);

  const todos = state.todos;

  const addTodoDispatcher = (title) => {
    dispatch(addTodo({ title }));
  };

  const deleteTodoDispatcher = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const checkTodoDispatcher = (id, completed) => {
    dispatch(checkTodo({ id, completed }));
  };

  return {
    todos,
    addTodoDispatcher,
    deleteTodoDispatcher,
    checkTodoDispatcher,
  };
};
