import { useState } from "react";

// useState hook demo
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (counter !== 0) {
      setCounter((prevCount) => prevCount - 1);
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
