import axios from "axios";

// creating base instance for api
const instance = axios.create({
  baseURL: "http://localhost:2000/api",
});

// helper fn to get all todos
export const getTodosRequest = async () => {
  const res = await instance.get("/todos");
  return res.data.data.todos;
};

// helper fn to get a single todo with id
export const getTodoRequest = async ({ id }) => {
  const res = await instance.get(`/todos/${id}`);
  return res.data.data.todo;
};

// helper fn to add todo
export const addTodoRequest = async ({ title, description }) => {
  const res = await instance.post(`/add-todo`, { title, description });
  return res.data.data.todo;
};

// helper fn to update todo
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

// helper fn to deleteTodo
export const deleteTodoRequest = async ({ id }) => {
  const res = await instance.delete(`/delete-todo/${id}`);
  return res.data.data.todo;
};
