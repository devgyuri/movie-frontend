import { ChangeEvent, useState } from "react";
import { useMoveToPage } from "./useMoveToPage";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";

export interface IUseSignUp {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => Promise<void>;
}

export const useSignUp = (): IUseSignUp => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [createUser] = useMutationCreateUser();

  const { moveToPage } = useMoveToPage();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const onClickSignUp = async (): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });

      if (result.data?.createUser === false) {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      alert("회원가입에 성공하였습니다. 로그인 해주세요.");
      moveToPage("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onChangeEmail,
    onChangePassword,
    onChangeName,
    onClickSignUp,
  };
};
