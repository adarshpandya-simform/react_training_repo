import { gql } from "apollo-server";
import { nanoid } from "nanoid";

// type definations for graphql
export const typeDefs = gql`
  # this is comment
  type Book {
    id: ID!
    title: String!
    bookId: String!
    author: Author!
  }

  type Author {
    authorId: ID!
    name: String!
    books: [Book!]!
  }

  # array of books
  type Query {
    books: [Book!]!
    book(id: ID!): Book!
    authors: [Author!]!
    author(id: ID!): Author!
  }

  type Mutation {
    createBook(id: ID!, title: String!): Book!
    updateBook(bookId: ID!, title: String!, authorId: String!): Book
    deleteBook(bookId: ID!): Book
    createAuthor(name: String!): Author!
    updateAuthor(authorId: ID!, name: String!): Author
    deleteAuthor(authorId: ID!): Author
  }
`;
