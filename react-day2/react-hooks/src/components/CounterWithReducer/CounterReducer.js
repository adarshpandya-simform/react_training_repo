import React, { useReducer } from "react";

let initialState = { counter: 10 };

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { ...state, counter: 0 };
    case "inc":
      return { ...state, counter: state.counter + 1 };
    case "dec":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatcher({ type: "inc" });
        }}
      >
        +
      </button>
      <span>count : {state.counter}</span>
      <button
        onClick={() => {
          dispatcher({ type: "dec" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default CounterReducer;
