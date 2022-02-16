import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsyncThunk,
  deleteTodoAsyncThunk,
  getTodosAsyncThunk,
  updateTodoAsyncThunk,
} from "../features/todo.slice";

// custom helper hook for all operations related to todos
// exports pieces of state and
// state related dispatchers
export const useTodos = () => {
  const { loading, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = (title) => {
    dispatch(addTodoAsyncThunk({ title }));
  };

  const fetchTodos = () => {
    dispatch(getTodosAsyncThunk());
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAsyncThunk({ id }));
  };

  const updateTodo = (id, title, completed) => {
    dispatch(updateTodoAsyncThunk({ id, title, completed }));
  };

  return { todos, loading, addTodo, fetchTodos, deleteTodo, updateTodo };
};
