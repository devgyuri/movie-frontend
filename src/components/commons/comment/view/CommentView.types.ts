import { Dispatch, SetStateAction } from "react";
import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentViewProps {
  data?: IComment;
  movieId: string;
  isMine: boolean;
}

export interface ICommentViewPictureProps {
  url: string;
}
