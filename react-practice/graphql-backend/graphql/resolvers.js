import { getAuthor, getAuthors } from "../helpers/author.helper.js";
import { getBook, getBooks } from "../helpers/book.helper.js";
import { mutations } from "./mutations.js";

// resolvers for gql
export const resolvers = {
  Query: {
    books: async () => await getBooks(),
    book: async (_, args) => await getBook(args.id),
    authors: async () => await getAuthors(),
    author: async (_, args) => await getAuthor(args.id),
  },
  Mutation: mutations,
  Book: {
    async author(parent) {
      const fetchedAuthor = await getAuthor(parent.id);
      return fetchedAuthor;
    },
  },
  Author: {
    async books(parent) {
      const fetchedBook = await getBook(parent.authorId);
      return fetchedBook;
    },
  },
};
