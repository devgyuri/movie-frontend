import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_USER = gql`
  mutation updateUser($upteUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput)
  }
`;

export const useMutationUpdateUser = (): MutationTuple<
  Pick<IMutation, "updateUser">,
  IMutationUpdateUserArgs
> => {
  const result = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  return result;
};
