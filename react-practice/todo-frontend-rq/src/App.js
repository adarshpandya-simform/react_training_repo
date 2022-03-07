import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { prefetchTodos } from "./helpers/getQueryClient";
import { AddTodoPage, HomePage, TodoDetailPage, TodosPage } from "./pages";

// prefetching all todos
prefetchTodos();

// App component with layout and routes
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
        <Route path="add-todo" element={<AddTodoPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
