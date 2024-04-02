import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
