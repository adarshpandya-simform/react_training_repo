import { getBook } from "../../helpers/book.helper.js";

// parent Author query resolver
export const authorQueryResolver = {
  async books(parent) {
    const fetchedBook = await getBook(parent.authorId);
    return fetchedBook;
  },
};
