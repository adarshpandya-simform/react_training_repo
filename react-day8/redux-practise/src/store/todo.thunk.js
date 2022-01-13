import axios from "axios";
import {
  loadTodos,
  setTodos,
  addTodo,
  deleteTodo,
  checkTodo,
} from "./todos.helper";

// async fetch todos thunk
export const fetchTodosThunk = () => async (dispatch, getState) => {
  dispatch(loadTodos());
  const todos = await axios
    .get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((res) => res.data);
  console.log("thunk: ", todos);
  dispatch(setTodos(todos));
};

// thunk for adding todo
export const addTodoThunk = (title) => async (dispatch, getState) => {
  dispatch(loadTodos);
  const todo = await axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        userId: 1,
        id: 122,
        title,
        completed: true,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => res.data);
  dispatch(addTodo(todo));
};

// thunk for deleting a todo
export const deleteTodoThunk = (id) => async (dispatch, getState) => {
  dispatch(loadTodos());
  const status = await axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.status);
  if (status === 200) {
    dispatch(deleteTodo(id));
  }
};

export const checkTodoThunk = (id, completed) => (dispatch, getState) => {
  dispatch(loadTodos());
  dispatch(checkTodo(id, completed));
};
