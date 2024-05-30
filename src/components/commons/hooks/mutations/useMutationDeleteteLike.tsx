import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLikeArgs,
  IMutationDeleteLikeArgs,
} from "../../../../commons/types/generated/types";

export const DELETE_LIKE = gql`
  mutation deleteLike($userId: Int!, $movieId: String!) {
    deleteLike(userId: $userId, movieId: $movieId)
  }
`;

export const useMutationDeleteLike = (): MutationTuple<
  Pick<IMutation, "deleteLike">,
  IMutationDeleteLikeArgs
> => {
  const result = useMutation<
    Pick<IMutation, "deleteLike">,
    IMutationCreateLikeArgs
  >(DELETE_LIKE);
  return result;
};
