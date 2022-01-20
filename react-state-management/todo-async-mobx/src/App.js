import { useEffect } from "react";
import "./App.css";
import { useTodos } from "./context/todo.context";
import { useObserver } from "mobx-react";
import InputTodo from "./components/InputTodo/InputTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";

function App() {
  const todoStore = useTodos();

  useEffect(() => {
    const fetchTodos = async () => {
      await todoStore.loadTodos();
    };
    fetchTodos();
  }, [todoStore]);

  return useObserver(() => {
    const { isLoading } = todoStore;
    return (
      <div>
        {isLoading && <p>fetching todos</p>}
        {!isLoading && (
          <>
            <InputTodo />
            <DisplayTodo />
          </>
        )}
      </div>
    );
  });
}

export default App;
