import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchLikeCountByMovieArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_LIKE_COUNT_BY_MOVIE = gql`
  query fetchLikeCountByMovie($movieId: String!) {
    fetchLikeCountByMovie(movieId: $movieId)
  }
`;

export const useQueryFetchLikeCountByMovie = (
  variables: IQueryFetchLikeCountByMovieArgs,
): QueryResult<
  Pick<IQuery, "fetchLikeCountByMovie">,
  IQueryFetchLikeCountByMovieArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchLikeCountByMovie">,
    IQueryFetchLikeCountByMovieArgs
  >(FETCH_LIKE_COUNT_BY_MOVIE, { variables });
  return result;
};
