import { useDispatch, useSelector } from "react-redux";
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

// creating a custom hook for counter
export const useCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return {
    count,
    increment: () => {
      dispatch(incrementCount());
    },
    decrement: () => {
      dispatch(decrementCount());
    },
    reset: () => {
      dispatch(resetCount());
    },
  };
};
