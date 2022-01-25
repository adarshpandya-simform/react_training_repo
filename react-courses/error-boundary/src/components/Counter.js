import React from "react";

const Counter = ({ count, setCount }) => {
  if (count === 5) {
    throw new Error("An error has been occured");
  }
  return (
    <div>
      <p>current count : {count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
