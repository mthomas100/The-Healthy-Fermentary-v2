import { ApolloClient, InMemoryCache } from "@apollo/client";

const devEndpoint = process.env.NEXT_PUBLIC_API_DEV;
const prodEndpoint = process.env.NEXT_PUBLIC_API_PROD;

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? devEndpoint : prodEndpoint,
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  },
});

export default client;
