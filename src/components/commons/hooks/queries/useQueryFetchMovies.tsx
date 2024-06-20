import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchMoviesArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_MOVIES = gql`
  query fetchMovies($keyword: String, $page: Int) {
    fetchMovies(keyword: $keyword, page: $page) {
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
      audi_acc
    }
  }
`;

export const useQueryFetchMovies = (
  variables?: IQueryFetchMoviesArgs,
): QueryResult<Pick<IQuery, "fetchMovies">, IQueryFetchMoviesArgs> => {
  const result = useQuery<Pick<IQuery, "fetchMovies">, IQueryFetchMoviesArgs>(
    FETCH_MOVIES,
    { variables },
  );
  return result;
};
