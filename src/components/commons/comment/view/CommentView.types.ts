import { Dispatch, SetStateAction } from "react";
import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentViewProps {
  data?: IComment;
  movieId: string;
  isMine: boolean;
  refetchMovie: (
    variables?: Partial<IQueryFetchMovieArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchMovie">>>;
}

export interface ICommentViewPictureProps {
  url: string;
}
