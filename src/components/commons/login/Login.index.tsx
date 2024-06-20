import { useLogin } from "../hooks/customs/useLogin";
import * as S from "./Login.styles";
import { useMoveToPage } from "../hooks/customs/useMoveToPage";
import { useRecoilState } from "recoil";
import { authState } from "../../../commons/stores";

const SOCIAL_LOGIN = [
  { name: "google", page: "/login/google" },
  { name: "naver", page: "/login/naver" },
  { name: "kakao", page: "/login/kakao" },
];

export default function Login(): JSX.Element {
  const [isAuth] = useRecoilState(authState);

  const { onChangeEmail, onChangePassword, onClickLogin } = useLogin();

  const { onClickMoveToPage, moveToPage } = useMoveToPage();

  if (isAuth) {
    moveToPage("/");
  }

  return (
    <>
      <S.Wrapper>
        <S.Label>E-mail</S.Label>
        <S.Email
          type="text"
          placeholder="abc@gmail.com"
          onChange={onChangeEmail}
        ></S.Email>
        <S.Label>비밀번호</S.Label>
        <S.Password
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={onChangePassword}
        ></S.Password>
        <S.SubmitButton onClick={onClickLogin}>로그인</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
