import { ApolloQueryResult } from "@apollo/client";
import {
  IComment,
  IQuery,
  IQueryFetchMovieArgs,
} from "../../../../commons/types/generated/types";

export interface ICommentListProps {
  commentsData?: IComment[];
  movieId: string;
}
