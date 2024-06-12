import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchCommentsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_COMMENTS = gql`
  query fetchComments($movieId: String!) {
    fetchComments(movieId: $movieId) {
      id
      contents
      user {
        name
        picture
      }
      created_at
      star
    }
  }
`;

export const useQueryFetchComments = (
  variables: IQueryFetchCommentsArgs,
): QueryResult<Pick<IQuery, "fetchComments">, IQueryFetchCommentsArgs> => {
  const result = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, { variables });
  return result;
};
