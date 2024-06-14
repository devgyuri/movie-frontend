import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateCommentArgs,
  IMutationUpdateCommentArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_COMMENT = gql`
  mutation updateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      id
      contents
      created_at
      user {
        id
        name
        picture
      }
    }
  }
`;

export const useMutationUpdateComment = (): MutationTuple<
  Pick<IMutation, "updateComment">,
  IMutationUpdateCommentArgs
> => {
  const result = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);
  return result;
};
