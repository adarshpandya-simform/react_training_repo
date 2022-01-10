import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.action";
import { v4 } from "uuid";

// creating a reducer so that we can use it to dispatch action
export const reducer = (state, action) => {
  switch (action.type) {
    // add todo case
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: v4(), title: action.payload.title, completed: false },
        ],
      };
    // delete the todo
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };
    // check complete/incomplete todo
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
