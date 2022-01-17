import {
  ADD_TODO,
  CHECk_TODO,
  DELETE_TODO,
  LOAD_TODO,
  SET_TODO,
} from "./todo.actions";

// initial state
let initialState = { todos: [], loading: false };

// creating and exporting reducer for todo
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TODO:
      return { ...state, loading: true };
    case SET_TODO:
      return { ...state, todos: payload, loading: false };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload], loading: false };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
        loading: false,
      };
    case CHECk_TODO:
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
        loading: false,
      };
    default:
      return state;
  }
};
