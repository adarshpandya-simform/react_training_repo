import { authorsArr, booksArr } from "../data/data.js";
import { mutations } from "./mutations.js";

// resolvers for gql
export const resolvers = {
  Query: {
    books: () => booksArr,
    book: (_, args) => booksArr.find((book) => book.bookId === args.id),
    authors: () => authorsArr,
    author: (_, args) =>
      authorsArr.find((author) => author.authorId === args.id),
  },
  Mutation: mutations,
  Book: {
    author(parent) {
      return authorsArr.find((author) => author.authorId === parent.id);
    },
  },
  Author: {
    books(parent) {
      return booksArr.filter((book) => book.id === parent.authorId);
    },
  },
};
