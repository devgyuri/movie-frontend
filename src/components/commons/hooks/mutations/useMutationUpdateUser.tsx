import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      email
      picture
    }
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
