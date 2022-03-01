import { getAuthor, getAuthors } from "../helpers/author.helper.js";
import { getBooks, getBook } from "../helpers/book.helper.js";

// queries resolver
export const queries = {
  books: async () => await getBooks(),
  book: async (_, args) => await getBook(args.id),
  authors: async () => await getAuthors(),
  author: async (_, args) => await getAuthor(args.id),
};
