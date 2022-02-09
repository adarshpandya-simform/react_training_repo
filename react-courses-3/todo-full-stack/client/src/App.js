import { useEffect } from "react";
import { DisplayTodo, InputTodo } from "./components";
import { useTodos } from "./hooks/useTodos";

const App = () => {
  const { fetchTodos } = useTodos();

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <InputTodo />
      <DisplayTodo />
    </div>
  );
};

export default App;
