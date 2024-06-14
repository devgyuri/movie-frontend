import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentListProps {
  commentsData?: IComment[];
  movieId: string;
}
