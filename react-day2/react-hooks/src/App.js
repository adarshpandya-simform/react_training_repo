import { useContext, useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
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
      {isLoading ? <p>fetching counter give me some time</p> : <Counter />}
      {/* useContext Example */}
      <p>change theme with context</p>
      <button
        className={theme === "light" ? "light-btn" : "dark-btn"}
        onClick={toggleTheme}
      >
        {theme === "light"
          ? "click to apply dark theme"
          : "click to apply light theme"}
      </button>
    </div>
  );
}

export default App;
