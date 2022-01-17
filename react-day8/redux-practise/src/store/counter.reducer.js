import { DECREMENT, INCREMENT, RESET } from "./counter.actions";

// initial state
let initialState = { count: 0 };

// creating and exporting reducer for counter
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
