import { ApolloServer, gql } from "apollo-server";

const PORT = process.env.PORT || 2000;

// books
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// type defination
const typeDefs = gql`
  # this is comment
  type Book {
    title: String
    author: String
  }

  # array of books
  type Query {
    books: [Book]
  }
`;

// resolvers
const resolvers = {
  Query: {
    books: () => books,
  },
};

// creating server
const server = new ApolloServer({ typeDefs, resolvers });

// making server listen on PORT: {2000}
server.listen(PORT).then(({ url, port, server, family, address }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Server port: ${port}`);
  console.log(`🚀 Server: ${server}`);
  console.log(`🚀 Family: ${family}`);
  console.log(`🚀 Address: ${address}`);
});
