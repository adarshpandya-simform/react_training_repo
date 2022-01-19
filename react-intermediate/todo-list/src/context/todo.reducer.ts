import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "./todo.action";
import { nanoid } from "nanoid";
import { Todo, TodoReducerType } from "./todo.context";

export const todoReducer: TodoReducerType = (state, action) => {
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
        todos: [
          ...state.todos.filter((todo: Todo) => todo.id !== action.payload.id),
        ],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo: Todo) => {
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
