import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  checkTodo,
  loadTodos,
} from "../features/todoSlice";

// defining a custom hooks to
// dispatch actions and access
// state easily
export const useTodos = () => {
  // extracting state from useSelector
  const { todos } = useSelector((state) => state.todos);
  // dispatcher
  const dispatch = useDispatch();

  // action helpers
  const addTodoAction = (title) => {
    dispatch(addTodo(title));
  };

  const loadTodosAction = (todos) => {
    dispatch(loadTodos(todos));
  };

  const deleteTodoAction = (doc_id) => {
    dispatch(deleteTodo(doc_id));
  };

  const checkTodoAction = (doc_id, completed) => {
    dispatch(checkTodo({ doc_id, completed }));
  };

  // returning actions and state access points
  return {
    todos,
    addTodoAction,
    loadTodosAction,
    deleteTodoAction,
    checkTodoAction,
  };
};
