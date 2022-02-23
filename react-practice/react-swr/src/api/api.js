import axios from "axios";

// setting defaults
axios.defaults.baseURL = "http://localhost:2000/api";
axios.defaults.headers.common["Content-Type"] = "application/json";

// axios helper for fetching all todos
export const fetchTodos = async () => {
  const { data } = await axios("/todos");
  return data;
};

// axios helper for adding a todo
export const addTodo = async (title) => {
  const { data } = await axios.post("/add-todo", { title });
  return data;
};

// axios helper for deleting todo
export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`/delete-todo/${id}`);
  return data;
};

// fetching todos url
export const GET_TODOS_URL = "http://localhost:2000/api/todos";
