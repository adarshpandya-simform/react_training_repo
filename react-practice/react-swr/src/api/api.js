import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000/api";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const fetchTodos = async () => {
  const { data } = await axios("/todos");
  return data;
};

export const addTodo = async (title) => {
  const { data } = await axios.post("/add-todo", { title });
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`/delete-todo/${id}`);
  return data;
};

export const GET_TODOS_URL = "http://localhost:2000/api/todos";
