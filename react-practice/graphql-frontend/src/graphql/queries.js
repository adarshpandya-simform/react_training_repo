import gql from "graphql-tag";

/**
 * graphql queries
 */

export const GET_BOOKS = gql`
  query getAllBooks {
    books {
      bookId
      title
      author {
        name
      }
      __typename @skip(if: true)
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($bookId: ID!) {
    book(id: $bookId) {
      bookId
      id
      title
      __typename @skip(if: true)
    }
  }
`;

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      authorId
      name
      books {
        title
      }
      __typename @skip(if: true)
    }
  }
`;

export const GET_AUTHOR = gql`
  query GetAuthor($authorId: ID!) {
    author(id: $authorId) {
      authorId
      name
      __typename @skip(if: true)
    }
  }
`;
