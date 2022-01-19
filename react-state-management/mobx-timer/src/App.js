import { observer } from "mobx-react";
import { useEffect } from "react";
import "./App.css";

// using observer from mobx-react to observe state
const App = observer(({ timer }) => {
  useEffect(() => {
    setInterval(() => {
      timer.increase();
    }, 1000);
  }, [timer]);

  // calling reset method in jsx
  return (
    <p
      onClick={() => {
        timer.reset();
      }}
    >
      seconds passed: {timer.secondPassed}
    </p>
  );
});

export default App;
