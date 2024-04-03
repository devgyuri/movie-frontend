import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoxOfficeArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOXOFFICE = gql`
  query fetchBoxOffice($date: String!) {
    fetchBoxOffice(date: $date) {
      id
      title
      open_dt
      plot
      actors {
        name
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
      vods {
        url
        isRep
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
