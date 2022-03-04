import axios from "axios";

// axios instance
const instance = axios.create({
  baseURL: "http://localhost:2000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * axios helper functions for todo
 */
export const getTodosRequest = async () => {
  const { data } = await instance.get("/todos");
  return data ? data.data.todos : null;
};

export const getTodoRequest = async (id: string) => {
  const { data } = await instance.get(`/todo/${id}`);
  return data ? data.data.todo : null;
};

export const insertTodoRequest = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { data } = await instance.post(`/add-todo`, { title, description });
  return data ? data.data.todo : null;
};

export const deleteTodoRequest = async (id: string) => {
  const { data } = await instance.delete(`/delete-todo/${id}`);
  return data ? data.data.todo : null;
};

export const updateTodoRequest = async ({
  completed,
  description,
  id,
  title,
}: {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}) => {
  const { data } = await instance.patch("/update-todo", {
    title,
    id,
    completed,
    description,
  });
  return data ? data.data.todo : null;
};
