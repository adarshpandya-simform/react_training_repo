import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.action";
import { v4 } from "uuid";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: v4(), title: action.payload.title, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};
