import { accessTokenState } from "../../../../commons/stores";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { useAuthState } from "./useAuthState";
import { Dispatch, SetStateAction, useState } from "react";

interface IUseLogoutArgs {
  setAuthState: Dispatch<SetStateAction<boolean>>;
}

interface IUseLogout {
  onClickLogout: () => void;
}

export const useLogout = (args: IUseLogoutArgs): IUseLogout => {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogout = (): void => {
    localStorage.removeItem("accessToken");
    args.setAuthState(false);
    setAccessToken("");
  };

  return {
    onClickLogout,
  };
};
