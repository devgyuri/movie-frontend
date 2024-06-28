import { LazyQueryResultTuple, gql, useLazyQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchLikeArgs,
  IQueryFetchRepPosterArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_REP_POSTER = gql`
  query fetchRepPoster($movieId: String!) {
    fetchRepPoster(movieId: $movieId) {
      id
      url
    }
  }
`;

export const useLazyQueryFetchRepPoster = (
  variables: IQueryFetchRepPosterArgs,
): LazyQueryResultTuple<
  Pick<IQuery, "fetchRepPoster">,
  IQueryFetchRepPosterArgs
> => {
  const result = useLazyQuery<
    Pick<IQuery, "fetchRepPoster">,
    IQueryFetchRepPosterArgs
  >(FETCH_REP_POSTER, { variables });
  return result;
};
