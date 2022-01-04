import { useEffect, useState } from "react";

// useState hook demo
const Counter = () => {
  const [counter, setCounter] = useState(0);

  // useEffect hook with dependency
  // will only run once the data of counter is changed
  // because we've specified it in dependency array
  useEffect(() => {
    alert("counter changed");
  }, [counter]);

  useEffect(() => {
    console.log("counter component mounted");
  }, []);

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
