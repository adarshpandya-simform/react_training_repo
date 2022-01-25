import { nanoid } from "nanoid";

// store
export const createTodoStore = () => {
  return {
    // state
    todos: [],
    // actions
    addTodo(title) {
      this.todos.push({ id: nanoid(), title });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  };
};
