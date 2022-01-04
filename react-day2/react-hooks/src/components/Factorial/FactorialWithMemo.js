import { useMemo, useState } from "react";

const FactorialWithMemo = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      <p>clicked : {inc} (open console to see function calls)</p>
    </div>
  );
};

const factorialOf = (num) => {
  // console.log("factorialOf(n) with 'memo' called!");
  return num <= 0 ? 1 : num * factorialOf(num - 1);
};

export default FactorialWithMemo;
