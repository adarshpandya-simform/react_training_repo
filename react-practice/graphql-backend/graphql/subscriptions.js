import { pubsub } from "./pubsubHelper.js";
import {
  BOOK_CREATED,
  AUTHOR_CREATED,
  BOOK_DELETED,
  BOOK_UPDATED,
  AUTHOR_DELETED,
  AUTHOR_UPDATED,
} from "./triggers.js";

// subscription resolvers
export const subscriptions = {
  bookCreated: {
    subscribe: () => pubsub.asyncIterator(BOOK_CREATED),
  },
  bookDeleted: {
    subscribe: () => pubsub.asyncIterator(BOOK_DELETED),
  },
  bookUpdated: {
    subscribe: () => pubsub.asyncIterator(BOOK_UPDATED),
  },
  authorCreated: {
    subscribe: () => pubsub.asyncIterator(AUTHOR_CREATED),
  },
  authorDeleted: {
    subscribe: () => pubsub.asyncIterator(AUTHOR_DELETED),
  },
  authorUpdated: {
    subscribe: () => pubsub.asyncIterator(AUTHOR_UPDATED),
  },
};
