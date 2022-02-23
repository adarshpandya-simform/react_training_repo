import { Link, Route, Routes } from "react-router-dom";
import AddTodoPage from "./pages/AddTodoPage";
import TodosPage from "./pages/TodosPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/add-todo">Add Todo</Link>
      </header>
      <Routes>
        <Route path="/" element={<p>home route</p>} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/add-todo" element={<AddTodoPage />} />
      </Routes>
    </div>
  );
};

export default App;
