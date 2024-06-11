import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchCommentsArgs,
} from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  userInfo: {
    name: string;
    image: string;
  };
  commentRefetch: (
    variables?: Partial<IQueryFetchCommentsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchComments">>>;
  movieId: string;
}

export interface ICommentWritePictureProps {
  url: string;
}
