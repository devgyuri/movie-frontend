import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLikeArgs,
  IMutationDeleteLikeArgs,
  IMutationDeleteSeenArgs,
} from "../../../../commons/types/generated/types";

export const DELETE_SEEN = gql`
  mutation deleteSeen($movieId: String!) {
    deleteSeen(movieId: $movieId)
  }
`;

export const useMutationDeleteSeen = (): MutationTuple<
  Pick<IMutation, "deleteSeen">,
  IMutationDeleteSeenArgs
> => {
  const result = useMutation<
    Pick<IMutation, "deleteSeen">,
    IMutationDeleteSeenArgs
  >(DELETE_SEEN);
  return result;
};
