import { useState } from "react";
import { useLogin } from "../hooks/customs/useLogin";
import { useSignUp } from "../hooks/customs/useSignUp";
import * as S from "./SignUp.styles";

export default function SignUp(): JSX.Element {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const { onChangeEmail, onChangePassword, onChangeName, onClickSignUp } =
    useSignUp({ setEmailError, setPasswordError, setNameError });

  return (
    <>
      <S.Wrapper>
        <S.Label>이름</S.Label>
        <S.Name
          type="text"
          placeholder="20글자 이내로 설정 가능합니다."
          onChange={onChangeName}
        ></S.Name>
        <S.Error>{nameError}</S.Error>
        <S.Label>이메일</S.Label>
        <S.Email
          type="text"
          placeholder="abc@gmail.com"
          onChange={onChangeEmail}
        ></S.Email>
        <S.Error>{emailError}</S.Error>
        <S.Label>비밀번호</S.Label>
        <S.Password
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChangePassword}
        ></S.Password>
        <S.Error>{passwordError}</S.Error>
        <S.SubmitButton onClick={onClickSignUp}>회원가입</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
