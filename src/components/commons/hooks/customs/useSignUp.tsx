import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useMoveToPage } from "./useMoveToPage";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";
import { useQueryNameDuplicationCheck } from "../queries/useQueryNameDuplicationCheck";

export interface IUseSignUpArgs {
  setEmailError: Dispatch<SetStateAction<string>>;
  setPasswordError: Dispatch<SetStateAction<string>>;
  setNameError: Dispatch<SetStateAction<string>>;
}

export interface IUseSignUp {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => Promise<void>;
}

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const useSignUp = (args: IUseSignUpArgs): IUseSignUp => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { refetch } = useQueryNameDuplicationCheck({ name });

  const [createUser] = useMutationCreateUser();

  const { moveToPage } = useMoveToPage();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!emailRegex.test(event.currentTarget.value)) {
      args.setEmailError("유효하지 않은 이메일 주소입니다.");
      return;
    }

    args.setEmailError("");
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (!passwordRegex.test(event.currentTarget.value)) {
      args.setPasswordError("유효하지 않은 비밀번호입니다.");
      return;
    }

    args.setPasswordError("");
    setPassword(event.currentTarget.value);
  };

  const onChangeName = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const result = await refetch({ name: event.currentTarget.value });
    if (result.data.nameDuplicationCheck) {
      args.setNameError("사용할 수 없는 이름입니다.");
      return;
    }

    args.setNameError("");
    setName(event.target.value);
  };

  const onClickSignUp = async (): Promise<void> => {
    if (email === "") {
      args.setEmailError("이메일 주소를 입력하여 주십시오.");
    }
    if (password === "") {
      args.setPasswordError("비밀번호를 입력하여 주십시오.");
    }
    if (name === "") {
      args.setNameError("이름을 입력하여 주십시오.");
    }
    if (email === "" || password === "" || name === "") {
      return;
    }

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
