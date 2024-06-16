import { LazyQueryResultTuple, gql, useLazyQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchLikeArgs,
  IQueryFetchSeenArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_SEEN = gql`
  query fetchSeen($movieId: String!) {
    fetchSeen(movieId: $movieId)
  }
`;

export const useLazyQueryFetchSeen = (
  variables: IQueryFetchSeenArgs,
): LazyQueryResultTuple<Pick<IQuery, "fetchSeen">, IQueryFetchSeenArgs> => {
  const result = useLazyQuery<Pick<IQuery, "fetchSeen">, IQueryFetchSeenArgs>(
    FETCH_SEEN,
    { variables },
  );
  return result;
};
