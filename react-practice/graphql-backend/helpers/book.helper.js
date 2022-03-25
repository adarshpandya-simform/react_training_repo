import { bookModel } from "../models/book.model.js";

// helper fn to insert book
export const insertBook = async (book) => {
  const newBook = new bookModel(book);
  const data = await newBook.save();
  return data;
};

// helper fn to get all books
export const getBooks = async () => {
  const books = await bookModel.find({});
  return books;
};

// helper fn to get a book
export const getBook = async (bookId) => {
  const book = await bookModel.findOne({ bookId });
  return book;
};

// helper fn to get a book by authorId
export const getBookByAuthor = async (authorId) => {
  const book = await bookModel.find({ id: authorId });
  return book;
};

// helper fn to delete a book
export const deleteBook = async (bookId) => {
  const deletedBook = await bookModel.findOneAndDelete({ bookId });
  return deletedBook;
};

// helper fn to update a book
export const updateBook = async (bookId, id, title) => {
  const updatedBook = await bookModel.findOneAndUpdate(
    { bookId },
    { id, title },
    { new: true }
  );
  return updatedBook;
};
