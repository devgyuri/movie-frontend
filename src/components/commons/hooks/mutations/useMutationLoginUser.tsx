import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
      profile {
        id
        name
        picture
        email
      }
    }
  }
`;

export const useMutationLogin = (): MutationTuple<
  Pick<IMutation, "loginUser">,
  IMutationLoginUserArgs
> => {
  const result = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  return result;
};
