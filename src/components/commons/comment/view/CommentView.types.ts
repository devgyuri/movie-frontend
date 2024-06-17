import { Dispatch, SetStateAction } from "react";
import {
  IComment,
  IQuery,
  IQueryFetchMovieArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface ICommentViewProps {
  data?: IComment;
  movieId: string;
  isMine: boolean;
  refetchMovie: (
    variables?: Partial<IQueryFetchMovieArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchMovie">>>;
}

export interface ICommentViewPictureProps {
  url: string;
}
