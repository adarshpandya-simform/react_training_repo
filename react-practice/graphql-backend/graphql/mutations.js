import { nanoid } from "nanoid";
import {
  deleteAuthor,
  insertAuthor,
  updateAuthor,
} from "../helpers/author.helper.js";
import { deleteBook, insertBook, updateBook } from "../helpers/book.helper.js";
import { pubsub } from "./pubsubHelper.js";
import {
  BOOK_CREATED,
  AUTHOR_CREATED,
  BOOK_UPDATED,
  BOOK_DELETED,
  AUTHOR_UPDATED,
  AUTHOR_DELETED,
} from "./triggers.js";

// mutations for gql
export const mutations = {
  createBook: async (_, { id, title }) => {
    const book = {
      id,
      title,
      bookId: nanoid(),
    };
    const insertedBook = await insertBook(book);

    pubsub.publish(BOOK_CREATED, {
      bookCreated: book,
    });

    return insertedBook;
  },

  createAuthor: async (_, { name }) => {
    const author = {
      authorId: nanoid(),
      name,
    };
    const insertedAuthor = await insertAuthor(author);

    pubsub.publish(AUTHOR_CREATED, {
      authorCreated: author,
    });

    return insertedAuthor;
  },

  updateBook: async (_, { id, title, bookId }) => {
    const updatedBook = await updateBook(bookId, id, title);

    pubsub.publish(BOOK_UPDATED, {
      bookUpdated: updatedBook,
    });

    return updatedBook;
  },

  updateAuthor: (_, { authorId, name }) => {
    const updatedAuthor = updateAuthor(authorId, name);

    pubsub.publish(AUTHOR_UPDATED, {
      authorUpdated: updatedAuthor,
    });

    return updatedAuthor;
  },

  deleteBook: async (_, { bookId }) => {
    const deletedBook = await deleteBook(bookId);

    pubsub.publish(BOOK_DELETED, {
      bookDeleted: deletedBook,
    });

    return deletedBook;
  },

  deleteAuthor: async (_, { authorId }) => {
    const deletedAuthor = await deleteAuthor(authorId);

    pubsub.publish(AUTHOR_DELETED, {
      authorDeleted: deletedAuthor,
    });

    return deletedAuthor;
  },
};
