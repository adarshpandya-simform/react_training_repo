import { Routes, Route, Navigate } from "react-router-dom";
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
import {
  SUBSCRIBE_TO_CREATE_AUTHOR,
  SUBSCRIBE_TO_CREATE_BOOK,
  SUBSCRIBE_TO_DELETE_AUTHOR,
  SUBSCRIBE_TO_DELETE_BOOK,
  SUBSCRIBE_TO_UPDATE_AUTHOR,
  SUBSCRIBE_TO_UPDATE_BOOK,
} from "./graphql";
import { useCustomSubscription } from "./hooks/useCustomSubscription";
import "./App.css";

// App component with all the routes
const App = () => {
  useCustomSubscription(SUBSCRIBE_TO_CREATE_BOOK);
  useCustomSubscription(SUBSCRIBE_TO_CREATE_AUTHOR);
  useCustomSubscription(SUBSCRIBE_TO_DELETE_BOOK);
  useCustomSubscription(SUBSCRIBE_TO_DELETE_AUTHOR);
  useCustomSubscription(SUBSCRIBE_TO_UPDATE_AUTHOR);
  useCustomSubscription(SUBSCRIBE_TO_UPDATE_BOOK);

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
