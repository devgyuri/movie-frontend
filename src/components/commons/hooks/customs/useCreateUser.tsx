import { useMoveToPage } from "./useMoveToPage";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";

export interface IUseCreateUserArgs {
  email: string;
  password: string;
  name: string;
  isActive: boolean;
}

export interface IUseCreateUser {
  onClickCreate: () => Promise<void>;
}

export const useCreateUser = (args: IUseCreateUserArgs): IUseCreateUser => {
  const [createUser] = useMutationCreateUser();

  const { moveToPage } = useMoveToPage();

  const onClickCreate = async (): Promise<void> => {
    if (!args.isActive) {
      return;
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: args.email,
            password: args.password,
            name: args.name,
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
    onClickCreate,
  };
};
