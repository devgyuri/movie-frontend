import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationSignUpArgs,
} from "../../../../commons/types/generated/types";

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name)
  }
`;

export const useMutationSignUp = (): MutationTuple<
  Pick<IMutation, "signUp">,
  IMutationSignUpArgs
> => {
  const result = useMutation<Pick<IMutation, "signUp">, IMutationSignUpArgs>(
    SIGN_UP,
  );
  return result;
};
