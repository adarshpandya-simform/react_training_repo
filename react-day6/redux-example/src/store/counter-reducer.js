import { INCREMENT, DECREMENT } from "./counter-actions";

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
