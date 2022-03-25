import axios from "axios";

// creating axios instance
const instance = axios.create({
  baseURL: "http://localhost:2000/api",
});

// helper fn to get all todos
export const getTodos = async () => {
  const res = await instance.get("/todos");
  return res.data.data.todos;
};

// helper fn to get todo by id
export const getTodo = async (id) => {
  const res = await instance.get(`/todo/${id}`);
  return res.data.data.todo;
};

// helper fn to insert todo
export const insertTodo = async ({ title, description }) => {
  const res = await instance.post(`/add-todo`, { title, description });
  return res.data.data.todo;
};

// helper fn to delete todo by id
export const deleteTodo = async (id) => {
  const res = await instance.delete(`/delete-todo/${id}`);
  return res.data.data.todo;
};

// helper fn to updateTodo
export const updateTodo = async ({ id, title, description, completed }) => {
  const res = await instance.patch(`/update-todo`, {
    id,
    title,
    description,
    completed,
  });
  return res.data.data.todo;
};
