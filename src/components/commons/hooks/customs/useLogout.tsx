import {
  accessTokenState,
  authState,
  userInfoState,
} from "../../../../commons/stores";
import { useRecoilState } from "recoil";

interface IUseLogout {
  onClickLogout: () => void;
}

export const useLogout = (): IUseLogout => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsAuth] = useRecoilState(authState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const onClickLogout = (): void => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    setIsAuth(false);
    setUserInfo({ name: "", image: "" });
  };

  return {
    onClickLogout,
  };
};
