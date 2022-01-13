import axios from "axios";
import { LOAD_TODO, SET_TODO } from "./todo.actions";

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

// async fetch todos thunk
export const fetchTodos = () => async (dispatch, getState) => {
  dispatch(loadTodos());
  const todos = await axios
    .get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((res) => res.data);
  console.log("thunk: ", todos);
  dispatch(setTodos(todos));
};
