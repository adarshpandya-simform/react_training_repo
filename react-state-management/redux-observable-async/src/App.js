import React from "react";
import DisplayTodos from "./components/DisplayTodos";
import FetchButton from "./components/FetchButton";

// App component
const App = () => {
  return (
    <div>
      {/* rendering FetchButton and DisplayTodos component */}
      <FetchButton />
      <DisplayTodos />
    </div>
  );
};

export default App;
