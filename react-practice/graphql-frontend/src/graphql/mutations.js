import gql from "graphql-tag";

/**
 * graphql mutations
 */

export const CREATE_BOOK = gql`
  mutation addBook($authorId: ID!, $title: String!) {
    createBook(id: $authorId, title: $title) {
      bookId
      id
      title
    }
  }
`;

export const CREATE_AUTHOR = gql`
  mutation addAuthor($name: String!) {
    createAuthor(name: $name) {
      authorId
      name
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      bookId
      id
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation removeAuthor($authorId: ID!) {
    deleteAuthor(authorId: $authorId) {
      authorId
      name
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation updateBook($bookId: ID!, $title: String!, $authorId: String!) {
    updateBook(bookId: $bookId, title: $title, authorId: $authorId) {
      bookId
      id
      title
    }
  }
`;

export const UPDATE_AUTHOR = gql`
  mutation updateAuthor($authorId: ID!, $name: String!) {
    updateAuthor(authorId: $authorId, name: $name) {
      authorId
      name
    }
  }
`;
