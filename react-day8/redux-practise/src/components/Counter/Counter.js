import { useCounter } from "../../store/counter.helper";

const Counter = () => {
  const { increment, decrement, reset } = useCounter();
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
