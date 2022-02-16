import { useContext } from "react";
import {
  addTodoAction,
  checkTodoAction,
  deleteTodoAction,
  fetchTodosAction,
  setLoadingAction,
} from "../contexts/actions";
import { TodoContext } from "../contexts/TodoContext";

// custom hook for state access and state operations
export const useTodos = () => {
  const { state, dispatch } = useContext(TodoContext);

  // accessing state pieces
  const loading = state.loading;
  const todos = state.todos;

  // accessing dispatchers
  const addTodoDispatcher = (todo) => {
    dispatch(addTodoAction(todo));
  };

  const deleteTodoDispatcher = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const checkTodoDispatcher = (id, completed) => {
    dispatch(checkTodoAction(id, completed));
  };

  const fetchTodosDispatcher = (todos) => {
    dispatch(fetchTodosAction(todos));
  };

  const setLoadingDispatcher = (loading) => {
    dispatch(setLoadingAction(loading));
  };

  // returning everything
  return {
    loading,
    todos,
    addTodoDispatcher,
    deleteTodoDispatcher,
    checkTodoDispatcher,
    setLoadingDispatcher,
    fetchTodosDispatcher,
  };
};
