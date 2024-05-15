import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchActorImageArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_ACTOR_IMAGE = gql`
  query fetchActorImage($name: String!) {
    fetchActorImage(name: $name)
  }
`;

export const useQueryFetchActorImage = (
  variables: IQueryFetchActorImageArgs,
): QueryResult<Pick<IQuery, "fetchActorImage">, IQueryFetchActorImageArgs> => {
  const result = useQuery<
    Pick<IQuery, "fetchActorImage">,
    IQueryFetchActorImageArgs
  >(FETCH_ACTOR_IMAGE, { variables });
  return result;
};
