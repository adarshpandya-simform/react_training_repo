import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SET_LOADING_STATE,
} from "./actions";

// reducer with operations for todo
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
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
    case SET_LOADING_STATE:
      return { ...state, loading: action.payload };
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
