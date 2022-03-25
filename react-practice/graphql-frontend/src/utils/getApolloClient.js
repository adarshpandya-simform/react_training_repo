import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { BASE_URL, WEB_SOCKET_BASE_URL } from "./getBaseUrl";

// defining a web socket link with apollo-ws-link
const wsLink = new WebSocketLink({
  uri: WEB_SOCKET_BASE_URL,
  options: {
    reconnect: true,
  },
});

// defining http link
const httpLink = new HttpLink({
  uri: BASE_URL,
});

// using split to split the requests
// query/mutation -> Http
// subscription -> WebSocket
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// helper fn to get apollo client with config
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
