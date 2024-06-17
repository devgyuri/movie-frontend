import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useMutationCreateComment } from "../mutations/useMutationCreateComment";
import { useMutationDeleteComment } from "../mutations/useMutationDeleteComment";
import {
  IComment,
  IQuery,
  IQueryFetchMovieArgs,
} from "../../../../commons/types/generated/types";
import { useMutationUpdateComment } from "../mutations/useMutationUpdateComment";
import { commentStateKeys } from "../../comment/view/CommentView.index";
import { message } from "antd";
import { FETCH_MOVIE_DETAIL } from "../queries/useQueryFetchMovieDetail";
import { ApolloQueryResult, gql } from "@apollo/client";

const READ_COMMENT_CACHE = gql`
  query ReadMovie($id: String!) {
    fetchMovie(id: $id) {
      id
      avg_star
      cnt_star
    }
  }
`;

export interface IUseCommentArgs {
  defaultData?: IComment;
  // contents: string;
  // star: number;
  movieId: string;
  // setContents: Dispatch<SetStateAction<string>>;
  // setStar: Dispatch<SetStateAction<number>>;
  setCommentState: Dispatch<SetStateAction<commentStateKeys>>;
  refetchMovie: (
    variables?: Partial<IQueryFetchMovieArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchMovie">>>;
}

export interface IUseComment {
  contentsLength: number;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickCreate: () => Promise<void>;
  onClickUpdate: (commentId: number) => () => Promise<void>;
  onClickDelete: (commentId: number) => () => Promise<void>;
}

export const useComment = (args: IUseCommentArgs): IUseComment => {
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  useEffect(() => {
    setContents(args.defaultData?.contents ?? "");
    setStar(args.defaultData?.star ?? 0);
  }, [args.defaultData]);

  const [createComment] = useMutationCreateComment();
  const [updateComment] = useMutationUpdateComment();
  const [deleteComment] = useMutationDeleteComment();

  const onChangeStar = (value: number): void => {
    setStar(value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.currentTarget.value);
  };

  const onClickCreate = async (): Promise<void> => {
    try {
      const result = await createComment({
        variables: {
          createCommentInput: {
            contents: contents,
            created_at: new Date(),
            star: star,
            movieId: args.movieId,
          },
        },
        update: (cache, { data: commentData }) => {
          cache.modify({
            fields: {
              fetchComments: (prev) => {
                return [commentData?.createComment, ...prev];
              },
            },
          });
          cache.updateQuery(
            {
              query: READ_COMMENT_CACHE,
              variables: { id: args.movieId },
            },
            (data) => ({
              fetchMovie: {
                ...data.fetchMovie,
                avg_star: (
                  (data.fetchMovie.avg_star * data.fetchMovie.cnt_star + star) /
                  (data.fetchMovie.cnt_star + 1)
                ).toFixed(2),
                cnt_star: data.fetchMovie.cnt_star + 1,
              },
            }),
          );
        },
      });
      // console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = (commentId: number) => async (): Promise<void> => {
    try {
      if (commentId === -1) {
        throw new Error("잘못된 요청입니다.");
      }

      const result = await updateComment({
        variables: {
          updateCommentInput: {
            id: commentId,
            contents: contents,
            star: star,
          },
        },
        update: (cache, { data: commentData }) => {
          cache.modify({
            fields: {
              fetchComments: (prev: IComment[], { readField }) => {
                const newComment = prev.map((el) => {
                  if (readField("id", el) === commentData?.updateComment.id) {
                    return {
                      ...commentData?.updateComment,
                    };
                  } else {
                    return el;
                  }
                });
                return newComment;
              },
            },
          });
          cache.updateQuery(
            {
              query: READ_COMMENT_CACHE,
              variables: { id: args.movieId },
            },
            (data) => ({
              fetchMovie: {
                ...data.fetchMovie,
                avg_star: (
                  (data.fetchMovie.avg_star * data.fetchMovie.cnt_star + star) /
                  (data.fetchMovie.cnt_star + 1)
                ).toFixed(2),
                cnt_star: data.fetchMovie.cnt_star + 1,
              },
            }),
          );
        },
      });
      args.setCommentState(commentStateKeys.READ);
      // console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickDelete = (commentId: number) => async () => {
    try {
      if (commentId === -1) {
        throw new Error("잘못된 요청입니다.");
      }

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
    contentsLength: contents.length,
    onChangeContents,
    onChangeStar,
    onClickCreate,
    onClickUpdate,
    onClickDelete,
  };
};
