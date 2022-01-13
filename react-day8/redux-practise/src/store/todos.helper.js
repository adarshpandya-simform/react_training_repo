import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, LOAD_TODO, SET_TODO } from "./todo.actions";
import { addTodoThunk, fetchTodos } from "./todo.thunk";

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

// custom hook for todos
export const useTodos = () => {
  const { todos, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const fetchTodosThunk = () => {
    dispatch(fetchTodos());
  };

  const addNewTodoThunk = (title) => {
    dispatch(addTodoThunk(title));
  };

  return { todos, loading, fetchTodosThunk, addNewTodoThunk };
};
