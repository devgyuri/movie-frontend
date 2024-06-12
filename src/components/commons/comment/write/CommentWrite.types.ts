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
  movieId: string;
}

export interface ICommentWritePictureProps {
  url: string;
}
