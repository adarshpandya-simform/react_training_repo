import { nanoid } from "nanoid";
import {
  deleteAuthor,
  insertAuthor,
  updateAuthor,
} from "../helpers/author.helper.js";
import { deleteBook, insertBook, updateBook } from "../helpers/book.helper.js";

// mutations for gql
export const mutations = {
  createBook: async (_, { id, title }) => {
    const book = {
      id,
      title,
      bookId: nanoid(),
    };
    const insertedBook = await insertBook(book);
    return insertedBook;
  },
  createAuthor: async (_, { name }) => {
    const author = {
      authorId: nanoid(),
      name,
    };
    const insertedAuthor = await insertAuthor(author);
    return insertedAuthor;
  },
  updateBook: async (_, { id, title, bookId }) => {
    const updatedBook = await updateBook(bookId, id, title);
    return updatedBook;
  },
  updateAuthor: (_, { authorId, name }) => {
    const updatedAuthor = updateAuthor(authorId, name);
    return updatedAuthor;
  },
  deleteBook: async (_, { bookId }) => {
    const deletedBook = await deleteBook(bookId);
    return deletedBook;
  },
  deleteAuthor: async (_, { authorId }) => {
    const deletedAuthor = await deleteAuthor(authorId);
    return deletedAuthor;
  },
};
