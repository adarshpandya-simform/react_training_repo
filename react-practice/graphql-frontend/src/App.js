import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {
  AddAuthor,
  AddBook,
  AuthorList,
  BookList,
  DeleteAuthor,
  DeleteBook,
  UpdateAuthor,
  UpdateBook,
} from "./components";

// App component with all the routes
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/authors" element={<AuthorList />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/add-author" element={<AddAuthor />} />
      <Route path="/delete-book" element={<DeleteBook />} />
      <Route path="/delete-author" element={<DeleteAuthor />} />
      <Route path="/update-book" element={<UpdateBook />} />
      <Route path="/update-author" element={<UpdateAuthor />} />
    </Routes>
  );
};

export default App;
