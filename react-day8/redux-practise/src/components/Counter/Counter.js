import { useCounter } from "../../store/counter.helper";

// Counter component which uses useCounter hook
const Counter = () => {
  const { increment, decrement, reset, count } = useCounter();

  // handler function for decrement
  const handleDecrement = () => {
    if (count !== 0) {
      decrement();
    }
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
