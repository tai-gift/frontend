import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.goldsky.com/api/public/project_cm3k99rt6rkzz01vcb06hd6j4/subgraphs/tai-gift-taiko-hekla-testnet/1.0/gn",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
