import {
  addTodoRequest,
  deleteTodoRequest,
  getTodosRequest,
  updateTodoRequest,
} from "../api/todo.api.js";
import create from "zustand";

export const useStore = create((set, get) => ({
  todos: [],
  isLoading: false,
  getTodos: async () => {
    set({ isLoading: true });
    const todos = await getTodosRequest();
    set({ todos, isLoading: false });
  },
  addTodo: async ({ title, description }) => {
    set({ isLoading: true });
    const todo = await addTodoRequest({ title, description });
    set({ todos: [...get().todos, todo], isLoading: false });
  },
  updateTodo: async ({ id, title, description, completed }) => {
    set({ isLoading: true });
    const updatedTodo = await updateTodoRequest({
      id,
      completed,
      description,
      title,
    });
    set({
      todos: [
        ...get().todos.map((todo) => {
          if (todo._id === id) {
            todo.title = updatedTodo.title;
            todo.completed = updatedTodo.completed;
            todo.description = updatedTodo.description;
          }
          return todo;
        }),
      ],
      isLoading: false,
    });
  },
  deleteTodo: async ({ id }) => {
    set({ isLoading: true });
    await deleteTodoRequest({ id });
    set({
      todos: [...get().todos.filter((todo) => todo._id !== id)],
      isLoading: false,
    });
  },
}));
