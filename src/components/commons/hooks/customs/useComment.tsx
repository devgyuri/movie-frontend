import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useMutationCreateComment } from "../mutations/useMutationCreateComment";
import { useMutationDeleteComment } from "../mutations/useMutationDeleteComment";
import { IComment } from "../../../../commons/types/generated/types";
import { useMutationUpdateComment } from "../mutations/useMutationUpdateComment";

export interface IUseCommentArgs {
  contents: string;
  star: number;
  movieId: string;
  setContents: Dispatch<SetStateAction<string>>;
  setStar: Dispatch<SetStateAction<number>>;
  setMyComment: Dispatch<SetStateAction<IComment | undefined>>;
}

export interface IUseComment {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickCreate: () => Promise<void>;
  onClickUpdate: (commentId: number) => () => Promise<void>;
  onClickDelete: (commentId: number) => () => Promise<void>;
}

export const useComment = (args: IUseCommentArgs): IUseComment => {
  const [createComment] = useMutationCreateComment();
  const [updateComment] = useMutationUpdateComment();
  const [deleteComment] = useMutationDeleteComment();

  const onChangeStar = (value: number): void => {
    args.setStar(value);
  };

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
      args.setMyComment(result.data?.createComment);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = (commentId: number) => async (): Promise<void> => {
    try {
      const result = await updateComment({
        variables: {
          updateCommentInput: {
            id: commentId,
            contents: args.contents,
            star: args.star,
            movieId: args.movieId,
          },
        },
        update: (cache, { data }) => {
          cache.modify({
            fields: {
              fetchComments: (prev: IComment[], { readField }) => {
                const newComment = prev.map((el) => {
                  console.log("updateComment", data?.updateComment);
                  if (readField("id", el) === data?.updateComment.id) {
                    return {
                      ...el,
                      user: {
                        ...el.user,
                      },
                      ...data?.updateComment,
                    };
                    // console.log(newC);
                    // return newC;
                  } else {
                    return el;
                  }
                });
                return newComment;
              },
            },
          });
        },
      });
      args.setMyComment(result.data?.updateComment);
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
              fetchComments: (prev: IComment[], { readField }) => {
                const newComment = prev.filter((el) => {
                  return readField("id", el) !== data?.deleteComment.id;
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
    onChangeStar,
    onClickCreate,
    onClickUpdate,
    onClickDelete,
  };
};
