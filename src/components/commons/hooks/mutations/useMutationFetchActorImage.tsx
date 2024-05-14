import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationFetchActorImageArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_ACTOR_IMAGE = gql`
  mutation fetchActorImage($name: String!) {
    fetchActorImage(name: $name)
  }
`;

export const useMutationActorImage = (
  variables: IMutationFetchActorImageArgs,
): MutationTuple<
  Pick<IMutation, "fetchActorImage">,
  IMutationFetchActorImageArgs
> => {
  const result = useMutation<
    Pick<IMutation, "fetchActorImage">,
    IMutationFetchActorImageArgs
  >(FETCH_ACTOR_IMAGE, { variables });

  return result;
};
