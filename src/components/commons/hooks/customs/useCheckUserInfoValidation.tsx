import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IQueryNameDuplicationCheckArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IUseCheckUserInputValidationArgs {
  email: string;
  password: string;
  name: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setEmailError: Dispatch<SetStateAction<string>>;
  setPasswordError: Dispatch<SetStateAction<string>>;
  setNameError: Dispatch<SetStateAction<string>>;
  nameRefetch: (
    variables?: Partial<IQueryNameDuplicationCheckArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "nameDuplicationCheck">>>;
}

export interface IUseCheckUserInputValidation {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const useCheckUserInputValidation = (
  args: IUseCheckUserInputValidationArgs,
): IUseCheckUserInputValidation => {
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value;
    if (value === "") {
      args.setEmailError("이메일 주소를 입력하여 주십시오.");
      args.setIsActive(false);
      return;
    }
    if (!emailRegex.test(value)) {
      args.setEmailError("유효하지 않은 이메일 주소입니다.");
      args.setIsActive(false);
      return;
    }

    args.setEmailError("");
    args.setEmail(value);

    if (value !== "" && args.password !== "" && args.name !== "") {
      args.setIsActive(true);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value === "") {
      args.setPasswordError("비밀번호를 입력하여 주십시오.");
      args.setIsActive(false);
      return;
    }
    if (!passwordRegex.test(event.currentTarget.value)) {
      args.setPasswordError("유효하지 않은 비밀번호입니다.");
      args.setIsActive(false);
      return;
    }

    args.setPasswordError("");
    args.setPassword(value);

    if (value !== "" && args.email !== "" && args.name !== "") {
      args.setIsActive(true);
    }
  };

  const onChangeName = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const value = event.currentTarget.value;
    if (value === "") {
      args.setNameError("이름을 입력하여 주십시오.");
      args.setIsActive(false);
      return;
    }

    const result = await args.nameRefetch({ name: value });
    if (result.data.nameDuplicationCheck) {
      args.setNameError("사용할 수 없는 이름입니다.");
      args.setIsActive(false);
      return;
    }

    args.setNameError("");
    args.setName(value);

    if (value !== "" && args.email !== "" && args.password !== "") {
      args.setIsActive(true);
    }
  };

  return {
    onChangeEmail,
    onChangePassword,
    onChangeName,
  };
};
