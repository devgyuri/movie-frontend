import { useMoveToPage } from "./useMoveToPage";
import { useMutationUpdateUser } from "../mutations/useMutationUpdateUser";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";

interface IUseUpdateUserArgs {
  name: string;
  password: string;
  email: string;
  picture: string;
  isActive: boolean;
}

interface IUseUpdateUser {
  onClickUpdate: () => Promise<void>;
}

export const useUpdateUser = (args: IUseUpdateUserArgs): IUseUpdateUser => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [updateUser] = useMutationUpdateUser();

  const { moveToPage } = useMoveToPage();

  const onClickUpdate = async (): Promise<void> => {
    if (!args.isActive) {
      return;
    }

    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: args.name,
            email: args.email,
            password: args.password,
            picture: args.picture,
          },
        },
      });

      if (result.data?.updateUser === undefined) {
        alert("회원 정보 수정에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      setUserInfo({
        ...userInfo,
        name: args.name,
        image: args.picture,
      });
      alert("회원 정보 수정에 성공하였습니다.");
      moveToPage("/myPage");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onClickUpdate,
  };
};
