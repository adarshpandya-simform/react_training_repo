import axios from "axios";

// check mode with process.env.NODE_ENV
const mode = process.env.NODE_ENV;

// creating axios instance
const instance = axios.create({
  baseURL:
    mode === "development"
      ? "http://localhost:2000/api"
      : "https://blooming-chamber-21116.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
});

// request to get all todos
export const getTodosRequest = async () => {
  const { data } = await instance.get("/todos");
  return data;
};

// request to delete todo with given id
export const deleteTodoRequest = async (id) => {
  const { data } = await instance.delete(`/delete-todo/${id}`);
  return data;
};

// request to update todo with given id with given data
export const updateTodoRequest = async ({ id, title, completed }) => {
  const { data } = await instance.patch("/update-todo", {
    id,
    title,
    completed,
  });
  return data;
};

// request to add todo
export const addTodoRequest = async ({ title }) => {
  const { data } = await instance.post("/add-todo", { title });
  return data;
};
