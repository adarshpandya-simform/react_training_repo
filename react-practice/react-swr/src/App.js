import { Link, Route, Routes } from "react-router-dom";
import AddTodoPage from "./pages/AddTodoPage";
import TodosPage from "./pages/TodosPage";
import { SWRConfig } from "swr";
import { Link as MLink } from "@mui/material";
import axios from "axios";
import "./App.css";

// navigation links
const navLinks = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/add-todo",
    title: "Add Todo",
  },
  {
    to: "/todos",
    title: "Todos",
  },
];

// App component: renders component on their
// respective routes
const App = () => {
  return (
    <div className="container">
      <header>
        {navLinks.map((link) => (
          <Link style={{ textDecoration: "none" }} to={link.to}>
            <MLink>{link.title}</MLink>
          </Link>
        ))}
      </header>
      <Routes>
        <Route path="/" element={<p>home route</p>} />
        <Route
          path="/todos"
          element={
            <SWRConfig
              value={{
                dedupingInterval: 5000,
                fetcher: (url) => axios(url).then((res) => res.data),
              }}
            >
              <TodosPage />
            </SWRConfig>
          }
        />
        <Route path="/add-todo" element={<AddTodoPage />} />
      </Routes>
    </div>
  );
};

export default App;
