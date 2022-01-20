import { useEffect } from "react";
import "./App.css";
import { useTodos } from "./context/todo.context";
import { useObserver } from "mobx-react";
import InputTodo from "./components/InputTodo/InputTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";

// App component
function App() {
  // using custom hook for fetching todos
  const todoStore = useTodos();

  // useEffect for calling fetchTodos action
  useEffect(() => {
    const fetchTodos = async () => {
      await todoStore.loadTodos();
    };
    fetchTodos();
  }, [todoStore]);

  // useObserver for observing state
  return useObserver(() => {
    // extracting isLoading from todoStore
    const { isLoading } = todoStore;
    return (
      <div>
        {/* conditional rendering for loading state */}
        {isLoading && <p>fetching todos</p>}
        {/* rendering components once loading is done */}
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
