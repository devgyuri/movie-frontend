import { ApolloQueryResult } from "@apollo/client";
import {
  IComment,
  IQuery,
  IQueryFetchCommentsArgs,
} from "../../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";

export interface ICommentWriteProps {
  userInfo: {
    id: number;
    name: string;
    image: string;
  };
  movieId: string;
  isEdit: boolean;
  data?: IComment;
  setMyComment: Dispatch<SetStateAction<IComment | undefined>>;
}

export interface ICommentWritePictureProps {
  url: string;
}
