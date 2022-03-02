import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL } from "./getBaseUrl";

// helper fn to get apollo client with config
export const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
