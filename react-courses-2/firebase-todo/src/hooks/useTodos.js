import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  checkTodo,
  loadTodos,
} from "../features/todoSlice";

export const useTodos = () => {
  const { todos, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

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
  return {
    todos,
    loading,
    addTodoAction,
    loadTodosAction,
    deleteTodoAction,
    checkTodoAction,
  };
};
