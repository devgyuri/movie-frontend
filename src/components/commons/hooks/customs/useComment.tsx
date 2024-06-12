import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useMoveToPage } from "./useMoveToPage";
import { useMutationCreateComment } from "../mutations/useMutationCreateComment";
import { useMutationDeleteComment } from "../mutations/useMutationDeleteComment";
import { IComment } from "../../../../commons/types/generated/types";

export interface IUseCommentArgs {
  contents: string;
  star: number;
  movieId: string;
  setContents: Dispatch<SetStateAction<string>>;
}

export interface IUseComment {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreate: () => Promise<void>;
  onClickDelete: (commentId: number) => () => Promise<void>;
}

export const useComment = (args: IUseCommentArgs): IUseComment => {
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
        update: (cache, { data }) => {
          cache.modify({
            fields: {
              fetchComments: (prev) => {
                return [data?.createComment, ...prev];
              },
            },
          });
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickDelete = (commentId: number) => async () => {
    try {
      const result = await deleteComment({
        variables: {
          commentId,
        },
        update: (cache, { data }) => {
          cache.modify({
            fields: {
              fetchComments: (prev: IComment[]) => {
                const newComment = prev.filter((el) => {
                  console.log("comment filter", el);
                  console.log(data);
                  return el.id !== data?.deleteComment.id;
                });
                return newComment;
              },
            },
          });
        },
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
