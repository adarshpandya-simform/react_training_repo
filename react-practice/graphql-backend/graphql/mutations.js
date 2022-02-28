import { authorsArr, booksArr } from "../data/data.js";
import { nanoid } from "nanoid";

// mutations for gql
export const mutations = {
  createBook: (_, { id, title }) => {
    const book = {
      id,
      title,
      bookId: nanoid(),
    };
    booksArr.push(book);
    return book;
  },
  createAuthor: (_, { name }) => {
    const author = {
      authorId: nanoid(),
      name,
    };
    authorsArr.push(author);
    return author;
  },
  updateBook: (_, { id, title, bookId }) => {
    const book = booksArr.filter((book) => book.bookId === bookId);
    if (book.length !== 0) {
      booksArr = booksArr.map((book) => {
        if (book.bookId === bookId) {
          book.title = title;
          book.id = id;
        }
        return book;
      });
      return book;
    }
    return null;
  },
  updateAuthor: (_, { authorId, name }) => {
    const author = authorsArr.filter((author) => author.authorId === authorId);
    if (author.length !== 0) {
      authorsArr = authorsArr.map((author) => {
        if (author.authorId === authorId) {
          author.name = name;
        }
        return author;
      });
      return author;
    }
    return null;
  },
  deleteBook: (_, { bookId }) => {
    const book = booksArr.find((book) => book.bookId === bookId);
    if (book.length !== 0) {
      booksArr = booksArr.filter((book) => book.bookId !== bookId);
      return book[0];
    }
    return null;
  },
  deleteAuthor: (_, { authorId }) => {
    const author = authorsArr.find((author) => author.authorId === authorId);
    if (author.length !== 0) {
      authorsArr = authorsArr.filter((author) => author.authorId !== authorId);
      return author[0];
    }
    return null;
  },
};
