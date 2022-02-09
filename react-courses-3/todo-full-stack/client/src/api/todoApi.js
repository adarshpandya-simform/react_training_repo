import axios from "axios";

const mode = process.env.NODE_ENV;

const instance = axios.create({
  baseURL:
    mode === "development"
      ? "http://localhost:2000/api"
      : "https://blooming-chamber-21116.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
});

export const getTodosRequest = async () => {
  const { data } = await instance.get("/todos");
  return data;
};

export const deleteTodoRequest = async (id) => {
  const { data } = await instance.delete(`/delete-todo/${id}`);
  return data;
};

export const updateTodoRequest = async ({ id, title, completed }) => {
  const { data } = await instance.patch("/update-todo", {
    id,
    title,
    completed,
  });
  return data;
};

export const addTodoRequest = async ({ title }) => {
  const { data } = await instance.post("/add-todo", { title });
  return data;
};
