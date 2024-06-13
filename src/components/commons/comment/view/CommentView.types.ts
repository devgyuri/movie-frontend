import { Dispatch, SetStateAction } from "react";
import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentViewProps {
  data: IComment;
  isRep: boolean;
  isMine: boolean;
  setMyComment: Dispatch<SetStateAction<IComment | undefined>>;
}

export interface ICommentViewCommentWrapperProps {
  isRep: boolean;
}

export interface ICommentViewPictureProps {
  url: string;
}
