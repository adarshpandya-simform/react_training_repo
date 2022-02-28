import { ApolloServer } from "apollo-server";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

// defining PORT
const PORT = process.env.PORT || 2000;

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
