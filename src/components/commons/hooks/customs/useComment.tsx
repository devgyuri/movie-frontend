import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useMoveToPage } from "./useMoveToPage";
import { useMutationCreateComment } from "../mutations/useMutationCreateComment";
import { useMutationDeleteComment } from "../mutations/useMutationDeleteComment";
import {
  IQuery,
  IQueryFetchCommentsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IUseCommentArgs {
  contents: string;
  star: number;
  movieId: string;
  setContents: Dispatch<SetStateAction<string>>;
  commentRefetch: (
    variables?: Partial<IQueryFetchCommentsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchComments">>>;
}

export interface IUseComment {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreate: () => Promise<void>;
  onClickDelete: () => Promise<void>;
}

export const useComment = (args: IUseCommentArgs): IUseComment => {
  const { moveToPage } = useMoveToPage();

  const [createComment] = useMutationCreateComment();
  const [deleteComment] = useMutationDeleteComment();

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    args.setContents(event.currentTarget.value);
  };

  const onClickCreate = async (): Promise<void> => {
    try {
      const result = await createComment({
        variables: {
          createCommentInput: {
            contents: args.contents,
            created_at: new Date(),
            star: args.star,
            movieId: args.movieId,
          },
        },
      });
      console.log(result);

      await args.commentRefetch({
        movieId: args.movieId,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      const result = await deleteComment({
        variables: {
          movieId: args.movieId,
        },
      });

      await args.commentRefetch({
        movieId: args.movieId,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onChangeContents,
    onClickCreate,
    onClickDelete,
  };
};
