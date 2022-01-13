import { DECREMENT, INCREMENT, RESET } from "./counter.actions";

// helper functions to dispatch actions
export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};
