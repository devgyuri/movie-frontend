import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  });

  const uploadLink: ApolloLink = createUploadLink({
    uri: "http://localhost:4000/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
