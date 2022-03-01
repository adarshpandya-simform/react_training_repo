import { bookQueryResolver } from "./customTypes/book.query.js";
import { authorQueryResolver } from "./customTypes/author.query.js";
import { mutations } from "./mutations.js";
import { queries } from "./queries.js";
import { subscriptions } from "./subscriptions.js";

// resolvers for gql
export const resolvers = {
  Query: queries,
  Mutation: mutations,
  Book: bookQueryResolver,
  Author: authorQueryResolver,
  Subscription: subscriptions,
};
