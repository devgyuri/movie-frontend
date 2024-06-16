import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchLikeArgs,
  IQueryFetchSeenArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_SEEN = gql`
  query fetchSeen($movieId: String!) {
    fetchSeen(movieId: $movieId)
  }
`;

export const useQueryFetchSeen = (
  variables: IQueryFetchSeenArgs,
): QueryResult<Pick<IQuery, "fetchSeen">, IQueryFetchSeenArgs> => {
  const result = useQuery<Pick<IQuery, "fetchSeen">, IQueryFetchSeenArgs>(
    FETCH_SEEN,
    { variables },
  );
  return result;
};
