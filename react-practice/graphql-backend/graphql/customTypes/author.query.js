import { getBookByAuthor } from "../../helpers/book.helper.js";

// parent Author query resolver
export const authorQueryResolver = {
  async books(parent) {
    const fetchedBook = await getBookByAuthor(parent.authorId);
    return fetchedBook;
  },
};
