// creating and exporting reducer for todo

import { LOAD_TODO, SET_TODO } from "./todo.actions";

let initialState = { todos: [], loading: false };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TODO:
      return { ...state, loading: true };
    case SET_TODO:
      return { ...state, todos: payload, loading: false };
    default:
      return state;
  }
};
