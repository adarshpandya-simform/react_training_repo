import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../app/todo.store";
import {
  addTodoAsyncThunk,
  deleteTodoAsyncThunk,
  getTodosAsyncThunk,
  updateTodoAsyncThunk,
} from "../features/todoSlice";

// custom hooks for todo operations

export const useTodosDispatch = () => useDispatch<AppDispatch>();
export const useTodosSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTodos = () => {
  const {
    todos: { isLoading, todos },
  } = useTodosSelector((state) => state);
  const dispatch = useTodosDispatch();

  const addTodo = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    dispatch(addTodoAsyncThunk({ description, title }));
  };

  const deleteTodo = ({ id }: { id: string }) => {
    dispatch(deleteTodoAsyncThunk({ id }));
  };

  const updateTodo = ({
    id,
    title,
    completed,
    description,
  }: {
    id: string;
    title: string;
    completed: boolean;
    description: string;
  }) => {
    dispatch(updateTodoAsyncThunk({ completed, description, id, title }));
  };

  const getTodo = ({ id }: { id: string }) => {
    const todo = todos.filter((todo) => todo._id === id);
    if (todo.length === 0) {
      console.log("here");
      dispatch(getTodosAsyncThunk());
      console.log(todos);
      return todos.filter((todo) => todo._id === id)[0];
    } else {
      console.log("there");
      return todo[0];
    }
  };

  const getTodos = () => {
    dispatch(getTodosAsyncThunk());
  };

  return {
    isLoading,
    todos,
    addTodo,
    deleteTodo,
    getTodo,
    getTodos,
    updateTodo,
  };
};
