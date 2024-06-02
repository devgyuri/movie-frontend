import { useEffect } from "react";
import { useMoveToPage } from "./useMoveToPage";

export const useAuth = (): void => {
  const { moveToPage } = useMoveToPage();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      moveToPage("/login");
    }
  });
};
