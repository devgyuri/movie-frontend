import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useMoveToPage } from "./useMoveToPage";
import { IUpdateUserInput } from "../../../../commons/types/generated/types";
import { useMutationUpdateUser } from "../mutations/useMutationUpdateUser";

interface IUseUpdateUser {
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  setPicture: Dispatch<SetStateAction<string>>;
  onClickEdit: () => Promise<void>;
}

export const useUpdateUser = (): IUseUpdateUser => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  const [updateUser] = useMutationUpdateUser();

  const { moveToPage } = useMoveToPage();

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const onClickEdit = async (): Promise<void> => {
    if (password === "" && name === "" && picture === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const updateUserInput: IUpdateUserInput = {};
    if (password !== "") {
      updateUserInput.password = password;
    }
    if (name !== "") {
      updateUserInput.name = name;
    }
    if (picture !== "") {
      updateUserInput.picture = picture;
    }

    try {
      const result = await updateUser({
        variables: {
          updateUserInput,
        },
      });

      if (result.data?.updateUser === undefined) {
        alert("회원 정보 수정에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      alert("회원 정보 수정에 성공하였습니다.");
      moveToPage("/myPage");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onChangePassword,
    onChangeName,
    setPicture,
    onClickEdit,
  };
};
