import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2000/api",
});

export const getTodosRequest = async () => {
  const res = await instance.get("/todos");
  return res.data.data.todos;
};

export const getTodoRequest = async ({ id }) => {
  const res = await instance.get(`/todos/${id}`);
  return res.data.data.todo;
};

export const addTodoRequest = async ({ title, description }) => {
  const res = await instance.post(`/add-todo`, { title, description });
  return res.data.data.todo;
};

export const updateTodoRequest = async ({
  id,
  title,
  description,
  completed,
}) => {
  const res = await instance.patch(`/update-todo`, {
    id,
    title,
    description,
    completed,
  });
  return res.data.data.todo;
};

export const deleteTodoRequest = async ({ id }) => {
  const res = await instance.delete(`/delete-todo/${id}`);
  return res.data.data.todo;
};
