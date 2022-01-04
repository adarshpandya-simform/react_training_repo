import { useContext, useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Factorial from "./components/Factorial/Factorial";
import FactorialWithMemo from "./components/Factorial/FactorialWithMemo";
import Form from "./components/Form/Form";
import CounterReducer from "./components/CounterWithReducer/CounterReducer";
import { DarkThemeContext } from "./context/DarkMode";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useContext hook for theme
  const { toggleTheme, theme } = useContext(DarkThemeContext);

  // useEffect hook example (run when component mounts)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* useState and useEffect Example */}
      <p>counter with useState and useEffect</p>
      {isLoading ? <p>fetching counter give me some time</p> : <Counter />}
      {/* useContext Example */}
      <p>change theme with context (useContext)</p>
      <button
        className={theme === "light" ? "light-btn" : "dark-btn"}
        onClick={toggleTheme}
      >
        {theme === "light"
          ? "click to apply dark theme"
          : "click to apply light theme"}
      </button>
      <p>fill automatic data with (useRef)</p>
      {/* useRef Example with Form Component*/}
      <Form />
      {/* useMemo example */}
      <p>memoize expensive calculation with (useMemo)</p>
      <small>without memo</small>
      <Factorial />
      <small>with memo</small>
      <FactorialWithMemo />
      <p>Counter with (useReducer/dispatcher and actions)</p>
      <CounterReducer />
    </div>
  );
}

export default App;
