import Header from "./components/Header/Header";
import TodosPage from "./pages/TodosPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import AddTodoPage from "./pages/AddTodoPage";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStore } from "./store/useStore";
import "./App.css";

// App component with Routes
const App = () => {
  const getTodos = useStore((state) => state.getTodos);

  // fetching all todos initially
  useEffect(() => {
    (async () => {
      await getTodos();
    })();
  }, [getTodos]);

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<p>this is home page</p>} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
        <Route path="/add-todo" element={<AddTodoPage />} />
      </Routes>
    </div>
  );
};

export default App;
