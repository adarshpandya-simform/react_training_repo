import React from "react";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import InputTodo from "./components/InputTodo/InputTodo";

const App = () => {
  return (
    <div>
      {/* rendering components */}
      <InputTodo />
      <DisplayTodo />
    </div>
  );
};

export default App;
