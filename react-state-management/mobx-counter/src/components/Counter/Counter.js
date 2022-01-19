import { observer } from "mobx-react";
import React, { useState } from "react";

// accepting counterStore as prop and using it
// for dispatching actions in Counter component
const Counter = observer(({ counterStore }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <button onClick={counterStore.increment}>+</button>
      <button onClick={counterStore.decrement}>-</button>
      <br />
      <input
        type={"number"}
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          counterStore.decBy(amount);
        }}
      >
        decrement by amount : {amount}
      </button>
    </div>
  );
});
export default Counter;
