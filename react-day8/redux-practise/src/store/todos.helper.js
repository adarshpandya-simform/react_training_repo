import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TODO,
  CHECk_TODO,
  DELETE_TODO,
  LOAD_TODO,
  SET_TODO,
} from "./todo.actions";
import {
  addTodoThunk,
  checkTodoThunk,
  deleteTodoThunk,
  fetchTodosThunk,
} from "./todo.thunk";

// todo action helper function
export const loadTodos = () => {
  return {
    type: LOAD_TODO,
  };
};

export const setTodos = (todos) => {
  return {
    type: SET_TODO,
    payload: todos,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const checkTodo = (id, completed) => {
  return {
    type: CHECk_TODO,
    payload: { id, completed },
  };
};

// custom hook for todos
export const useTodos = () => {
  const { todos, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const fetchTodos = () => {
    dispatch(fetchTodosThunk());
  };

  const addNewTodo = (title) => {
    dispatch(addTodoThunk(title));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoThunk(id));
  };

  const checkTodo = (id, completed) => {
    dispatch(checkTodoThunk(id, completed));
  };

  return { todos, loading, fetchTodos, addNewTodo, deleteTodo, checkTodo };
};
