import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoxOfficeArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOXOFFICE = gql`
  query fetchBoxOffice($date: String!) {
    fetchBoxOffice(date: $date) {
      id
      rank
      audi_acc
      movie {
        id
        title
        open_dt
        avg_star
        directors {
          id
          name
        }
        genres {
          id
          name
        }
        posters {
          url
          isRep
        }
      }
    }
  }
`;

export const useQueryFetchBoxOffice = (
  variables: IQueryFetchBoxOfficeArgs,
): QueryResult<Pick<IQuery, "fetchBoxOffice">, IQueryFetchBoxOfficeArgs> => {
  const result = useQuery<
    Pick<IQuery, "fetchBoxOffice">,
    IQueryFetchBoxOfficeArgs
  >(FETCH_BOXOFFICE, { variables });
  return result;
};
