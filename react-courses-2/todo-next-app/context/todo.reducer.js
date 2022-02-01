import { nanoid } from "nanoid";
import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.action";

// reducer for TodoContext
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nanoid(), title: payload, completed: false },
        ],
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
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    default:
      return state;
  }
};
