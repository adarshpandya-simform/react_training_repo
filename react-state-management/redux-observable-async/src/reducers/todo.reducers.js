import { SET_LOADING, SET_TODOS } from "../actions/todos.actions";

let initialState = { todos: [], isLoading: false };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: [...action.payload],
        isLoading: false,
      };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
