import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "./todo.actions";
import { nanoid } from "nanoid";

// todo reducer with add/delete/update functionality
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nanoid(), title: action.payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.completed = action.payload.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};
