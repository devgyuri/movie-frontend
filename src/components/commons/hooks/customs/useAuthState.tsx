import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IUseAuthState {
  authState: boolean;
  setAuthState: Dispatch<SetStateAction<boolean>>;
}

export const useAuthState = (): IUseAuthState => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setAuthState(true);
    }
  }, []);

  return {
    authState,
    setAuthState,
  };
};
