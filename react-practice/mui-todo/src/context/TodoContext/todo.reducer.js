import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.actions";
import { nanoid } from "nanoid";

// reducer for todos
export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nanoid(), title: payload.title, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload.id)],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === payload.id) {
              todo.completed = payload.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};
