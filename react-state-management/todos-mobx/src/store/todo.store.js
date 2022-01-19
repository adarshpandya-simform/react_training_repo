import { nanoid } from "nanoid";

export const createTodoStore = () => {
  return {
    todos: [],
    addTodo(title) {
      this.todos.push({ id: nanoid(), title });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  };
};
