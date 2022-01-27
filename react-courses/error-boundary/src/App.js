import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import About from "./components/About";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/counter"
        element={
          <ErrorBoundary>
            <Counter count={count} setCount={setCount} />
          </ErrorBoundary>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
