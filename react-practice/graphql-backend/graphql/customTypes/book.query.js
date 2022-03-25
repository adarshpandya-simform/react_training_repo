import { getAuthor } from "../../helpers/author.helper.js";

// parent Book query resolver
export const bookQueryResolver = {
  async author(parent) {
    const fetchedAuthor = await getAuthor(parent.id);
    return fetchedAuthor;
  },
};
