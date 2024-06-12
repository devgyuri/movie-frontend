import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteCommentArgs,
} from "../../../../commons/types/generated/types";

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: Int!) {
    deleteComment(commentId: $commentId) {
      id
    }
  }
`;

export const useMutationDeleteComment = (): MutationTuple<
  Pick<IMutation, "deleteComment">,
  IMutationDeleteCommentArgs
> => {
  const result = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);
  return result;
};
