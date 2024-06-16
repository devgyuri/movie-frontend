import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchSeenCountByMovieArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_SEEN_COUNT_BY_MOVIE = gql`
  query fetchSeenCountByMovie($movieId: String!) {
    fetchSeenCountByMovie(movieId: $movieId)
  }
`;

export const useQueryFetchSeenCountByMovie = (
  variables: IQueryFetchSeenCountByMovieArgs,
): QueryResult<
  Pick<IQuery, "fetchSeenCountByMovie">,
  IQueryFetchSeenCountByMovieArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchSeenCountByMovie">,
    IQueryFetchSeenCountByMovieArgs
  >(FETCH_SEEN_COUNT_BY_MOVIE, { variables });
  return result;
};
