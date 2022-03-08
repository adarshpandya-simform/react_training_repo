import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useStore } from "./store/useStore";
import Header from "./components/Header/Header";
import TodosPage from "./pages/TodosPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import AddTodoPage from "./pages/AddTodoPage";

const App = () => {
  const getTodos = useStore((state) => state.getTodos);

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
