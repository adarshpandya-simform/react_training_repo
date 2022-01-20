import React from "react";
import DisplayTodos from "./components/DisplayTodos";
import FetchButton from "./components/FetchButton";

const App = () => {
  return (
    <div>
      <FetchButton />
      <DisplayTodos />
    </div>
  );
};

export default App;
