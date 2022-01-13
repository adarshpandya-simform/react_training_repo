import { useCounter } from "../../store/counter.helper";

const Counter = () => {
  const { increment, decrement, reset, count } = useCounter();

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
