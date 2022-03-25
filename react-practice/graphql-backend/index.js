import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { connectDB } from "./config/db.config.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

// connecting to db
connectDB();

// defining PORT
const PORT = process.env.PORT || 2000;

// creating express app instance
const app = express();
// creating http server w/ app instance
const httpServer = createServer(app);

// defining schema for ApolloServer
const schema = makeExecutableSchema({ typeDefs, resolvers });

// creating server with schema
const server = new ApolloServer({
  schema,
});

// starting and applying middleware on server
await server.start();
server.applyMiddleware({ app });

// creating subscription server
SubscriptionServer.create(
  { schema, execute, subscribe },
  { server: httpServer, path: server.graphqlPath }
);

// listening on httpServer
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
