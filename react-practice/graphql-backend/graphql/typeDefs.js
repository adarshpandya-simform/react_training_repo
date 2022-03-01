import { gql } from "apollo-server-express";

// type definations for graphql schema
export const typeDefs = gql`
  # this is comment
  # Book Type
  type Book {
    id: ID!
    title: String!
    bookId: String!
    author: Author!
  }

  # Author Type
  type Author {
    authorId: ID!
    name: String!
    books: [Book!]!
  }

  # Query type
  type Query {
    books: [Book!]!
    book(id: ID!): Book!
    authors: [Author!]!
    author(id: ID!): Author!
  }

  # mutations
  type Mutation {
    createBook(id: ID!, title: String!): Book!
    updateBook(bookId: ID!, title: String!, authorId: String!): Book
    deleteBook(bookId: ID!): Book
    createAuthor(name: String!): Author!
    updateAuthor(authorId: ID!, name: String!): Author
    deleteAuthor(authorId: ID!): Author
  }

  # subscriptions
  type Subscription {
    bookCreated: Book
    bookDeleted: Book
    bookUpdated: Book
    authorCreated: Author
    authorDeleted: Author
    authorUpdated: Author
  }
`;
