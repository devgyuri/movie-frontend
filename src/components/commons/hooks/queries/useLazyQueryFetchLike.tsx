import { LazyQueryResultTuple, gql, useLazyQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchLikeArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_LIKE = gql`
  query fetchLike($movieId: String!) {
    fetchLike(movieId: $movieId)
  }
`;

export const useLazyQueryFetchLike = (
  variables: IQueryFetchLikeArgs,
): LazyQueryResultTuple<Pick<IQuery, "fetchLike">, IQueryFetchLikeArgs> => {
  const result = useLazyQuery<Pick<IQuery, "fetchLike">, IQueryFetchLikeArgs>(
    FETCH_LIKE,
    { variables },
  );
  return result;
};
