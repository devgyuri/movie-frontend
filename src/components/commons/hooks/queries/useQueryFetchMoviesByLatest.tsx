import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchMoviesByGenreArgs,
  IQueryFetchMoviesByLatestArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_MOVIES_BY_LATEST = gql`
  query fetchMoviesByLatest($latestId: Int!, $page: Int) {
    fetchMoviesByLatest(latestId: $latestId, page: $page) {
      id
      title
      open_dt
      avg_star
      posters {
        id
        url
      }
      genres {
        id
        name
      }
      directors {
        name
      }
    }
  }
`;

export const useQueryFetchMoviesByLatest = (
  variables: IQueryFetchMoviesByLatestArgs,
): QueryResult<
  Pick<IQuery, "fetchMoviesByLatest">,
  IQueryFetchMoviesByLatestArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchMoviesByLatest">,
    IQueryFetchMoviesByLatestArgs
  >(FETCH_MOVIES_BY_LATEST, { variables });
  return result;
};
