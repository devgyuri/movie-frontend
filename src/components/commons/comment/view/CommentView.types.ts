import { Dispatch, SetStateAction } from "react";
import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentViewProps {
  data?: IComment;
  movieId: string;
  isRep: boolean;
  isMine: boolean;
}

export interface ICommentViewCommentViewWrapperProps {
  isRep: boolean;
}

export interface ICommentViewPictureProps {
  url: string;
}
