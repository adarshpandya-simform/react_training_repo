// creating and exporting reducer for counter

import { DECREMENT, INCREMENT, RESET } from "./counter.actions";

let initialState = { count: 0 };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
