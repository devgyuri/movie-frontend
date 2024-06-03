import { useLogin } from "../hooks/customs/useLogin";
import { useSignUp } from "../hooks/customs/useSignUp";
import * as S from "./SignUp.styles";

export default function SignUp(): JSX.Element {
  const { onChangeEmail, onChangePassword, onChangeName, onClickSignUp } =
    useSignUp();

  return (
    <>
      <S.Wrapper>
        <S.Label>별명</S.Label>
        <S.Name
          type="text"
          placeholder="20글자 이내로 설정 가능합니다."
          onChange={onChangeName}
        ></S.Name>
        <S.Label>E-mail</S.Label>
        <S.Email
          type="text"
          placeholder="abc@gmail.com"
          onChange={onChangeEmail}
        ></S.Email>
        <S.Label>비밀번호</S.Label>
        <S.Password
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChangePassword}
        ></S.Password>
        <S.SubmitButton onClick={onClickSignUp}>회원가입</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
