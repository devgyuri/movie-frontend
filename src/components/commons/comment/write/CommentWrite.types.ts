import { ApolloQueryResult } from "@apollo/client";
import {
  IComment,
  IQuery,
  IQueryFetchMovieArgs,
} from "../../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";
import { commentStateKeys } from "../view/CommentView.index";

export interface ICommentWriteProps {
  data?: IComment;
  commentState: commentStateKeys;
  movieId: string;
  setCommentState: Dispatch<SetStateAction<commentStateKeys>>;
  refetchMovie: (
    variables?: Partial<IQueryFetchMovieArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchMovie">>>;
}

export interface ICommentWritePictureProps {
  url: string;
}
