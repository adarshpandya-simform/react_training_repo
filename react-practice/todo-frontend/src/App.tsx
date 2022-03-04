import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import TodosPage from "./pages/TodosPage";

// App component
const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/todo/:id" element={<TodoDetailsPage />} />
    </Routes>
  );
};

export default App;
