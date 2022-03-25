import React, { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      current count: {count}
    </button>
  );
};
