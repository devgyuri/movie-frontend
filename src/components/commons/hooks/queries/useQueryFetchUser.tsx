import { QueryResult, gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      email
      name
    }
  }
`;

export const useQueryFetchUser = (): QueryResult<Pick<IQuery, "fetchUser">> => {
  const result = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  return result;
};
