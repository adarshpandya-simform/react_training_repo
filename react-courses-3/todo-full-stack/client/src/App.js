import { useEffect } from "react";
import { DisplayTodo, InputTodo } from "./components";
import { useTodos } from "./hooks/useTodos";
import "./App.css";

// App component for rendering all components
const App = () => {
  const { fetchTodos } = useTodos();

  // fetching all todos on component mount
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="todo-app-container">
      {/* rendering both components */}
      <InputTodo />
      <DisplayTodo />
    </div>
  );
};

export default App;
