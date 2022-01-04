import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook example (run when component mounts)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? <p>fetching counter give me some time</p> : <Counter />}
    </div>
  );
}

export default App;
