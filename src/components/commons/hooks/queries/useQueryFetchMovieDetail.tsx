import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchMovieArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_MOVIE_DETAIL = gql`
  query fetchMovieDetail($id: String!) {
    fetchMovie(id: $id) {
      id
      title
      open_dt
      plot
      audi_acc
      avg_star
      actors {
        name
        url
      }
      directors {
        name
      }
      genres {
        name
      }
      posters {
        url
        isRep
      }
      stills {
        url
        isRep
      }
      vods {
        url
        isRep
      }
    }
  }
`;

export const useQueryFetchMovieDetail = (
  variables: IQueryFetchMovieArgs,
): QueryResult<Pick<IQuery, "fetchMovie">, IQueryFetchMovieArgs> => {
  const result = useQuery<Pick<IQuery, "fetchMovie">, IQueryFetchMovieArgs>(
    FETCH_MOVIE_DETAIL,
    { variables },
  );
  return result;
};
