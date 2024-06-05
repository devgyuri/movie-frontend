import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput)
  }
`;

export const useMutationCreateUser = (): MutationTuple<
  Pick<IMutation, "createUser">,
  IMutationCreateUserArgs
> => {
  const result = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  return result;
};
