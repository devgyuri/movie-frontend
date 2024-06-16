import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLikeArgs,
  IMutationCreateSeenArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_SEEN = gql`
  mutation createSeen($movieId: String!) {
    createSeen(movieId: $movieId)
  }
`;

export const useMutationCreateSeen = (): MutationTuple<
  Pick<IMutation, "createSeen">,
  IMutationCreateSeenArgs
> => {
  const result = useMutation<
    Pick<IMutation, "createSeen">,
    IMutationCreateSeenArgs
  >(CREATE_SEEN);
  return result;
};
