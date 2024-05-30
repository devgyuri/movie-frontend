import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLikeArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_LIKE = gql`
  mutation createLike($userId: Int!, $movieId: String!) {
    createLike(userId: $userId, movieId: $movieId)
  }
`;

export const useMutationCreateLike = (): MutationTuple<
  Pick<IMutation, "createLike">,
  IMutationCreateLikeArgs
> => {
  const result = useMutation<
    Pick<IMutation, "createLike">,
    IMutationCreateLikeArgs
  >(CREATE_LIKE);
  return result;
};
