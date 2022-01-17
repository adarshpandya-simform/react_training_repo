import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>this is deployed site!!!</p>
      <span>secret key : {process.env.REACT_APP_SECRET_KEY}</span>
      <h5>current count {count}</h5>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
