import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchMoviesByGenreArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_MOVIES_BY_GENRE = gql`
  query fetchMoviesByGenre($genreId: Int!, $page: Int) {
    fetchMoviesByGenre(genreId: $genreId, page: $page) {
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

export const useQueryFetchMoviesByGenre = (
  variables: IQueryFetchMoviesByGenreArgs,
): QueryResult<
  Pick<IQuery, "fetchMoviesByGenre">,
  IQueryFetchMoviesByGenreArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchMoviesByGenre">,
    IQueryFetchMoviesByGenreArgs
  >(FETCH_MOVIES_BY_GENRE, { variables });
  return result;
};
