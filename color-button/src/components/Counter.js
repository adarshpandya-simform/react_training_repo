import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((count) => count + 1);
  };

  const decreaseCount = () => {
    if (counter !== 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default Counter;
