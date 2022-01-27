import React, { useState } from "react";
import Counter from "./components/Counter";
import ErrorBoundaryComponent from "./components/ErrorBoundaryComponent";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

// App component which passes count and setCount to Counter
const App = () => {
  const [count, setCount] = useState(0);

  return (
    // Router with Routes and path
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/counter"
        element={
          <ErrorBoundaryComponent onReset={() => setCount(0)}>
            <Counter count={count} setCount={setCount} />
          </ErrorBoundaryComponent>
        }
      />
    </Routes>
  );
};

export default App;
