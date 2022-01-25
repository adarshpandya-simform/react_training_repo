import React from "react";

// Counter component
// accepting count,setCount as prop
const Counter = ({ count, setCount }) => {
  // manually throwing Error
  if (count === 5) {
    throw new Error("Count is 5. Error Occurred.");
  }

  return (
    //   rendering JSX
    <div>
      <p>current count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
