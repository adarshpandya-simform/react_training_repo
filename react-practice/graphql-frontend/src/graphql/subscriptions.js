import gql from "graphql-tag";

/**
 * graphql subscriptions
 */

export const SUBSCRIBE_TO_CREATE_BOOK = gql`
  subscription subscribeToCreateBook {
    bookCreated {
      bookId
      id
      title
    }
  }
`;

export const SUBSCRIBE_TO_CREATE_AUTHOR = gql`
  subscription subscribeToCreateAuthor {
    authorCreated {
      authorId
      name
    }
  }
`;

export const SUBSCRIBE_TO_DELETE_BOOK = gql`
  subscription subscribeToDeleteBook {
    bookDeleted {
      bookId
      id
      title
    }
  }
`;

export const SUBSCRIBE_TO_DELETE_AUTHOR = gql`
  subscription subscribeToDeleteAuthor {
    authorDeleted {
      authorId
      name
    }
  }
`;

export const SUBSCRIBE_TO_UPDATE_BOOK = gql`
  subscription subscribeToUpdateBook {
    bookUpdated {
      bookId
      id
      title
    }
  }
`;

export const SUBSCRIBE_TO_UPDATE_AUTHOR = gql`
  subscription subscribeToUpdateAuthor {
    authorUpdated {
      authorId
      name
    }
  }
`;
