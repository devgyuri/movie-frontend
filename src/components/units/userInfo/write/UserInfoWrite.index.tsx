import { IUserInfoWriteProps } from "./UserInfoWrite.types";
import * as S from "./UserInfoWrite.styles";
import { useUpdateUser } from "../../../commons/hooks/customs/useUpdateUser";
import { useUploads } from "../../../commons/hooks/customs/useUploads";
import { useEffect, useState } from "react";
import { useCreateUser } from "../../../commons/hooks/customs/useCreateUser";
import { useQueryNameDuplicationCheck } from "../../../commons/hooks/queries/useQueryNameDuplicationCheck";
import { useCheckUserInputValidation } from "../../../commons/hooks/customs/useCheckUserInfoValidation";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";

export default function UserInfoWrite(props: IUserInfoWriteProps): JSX.Element {
  const [userInfo] = useRecoilState(userInfoState);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const { refetch: nameRefetch } = useQueryNameDuplicationCheck({ name });

  const { onChangeEmail, onChangePassword, onChangeName } =
    useCheckUserInputValidation({
      name,
      password,
      email,
      setName,
      setPassword,
      setEmail,
      setIsActive,
      setEmailError,
      setPasswordError,
      setNameError,
      nameRefetch,
    });

  const { onClickCreate } = useCreateUser({ email, password, name, isActive });

  // edit user info
  const [picture, setPicture] = useState("");

  useEffect(() => {
    setEmail(userInfo.email);
    setName(userInfo.name);
    setPicture(userInfo.image);
  }, [userInfo]);

  const { fileRef, onChangeFile, onClickUpload } = useUploads({
    setPicture,
  });

  const { onClickUpdate } = useUpdateUser({
    email,
    name,
    password,
    picture,
    isActive,
  });

  return (
    <>
      <S.Wrapper>
        {props.isEdit && (
          <S.InputWrapper>
            <S.Picture
              onClick={onClickUpload}
              url={
                picture === ""
                  ? "/images/flower.jpg"
                  : `http://storage.googleapis.com/example121232/${picture}`
              }
            />
            <S.UploadFileHidden
              type="file"
              ref={fileRef}
              onChange={onChangeFile}
            />
          </S.InputWrapper>
        )}
        <S.InputWrapper>
          <S.Label>이름</S.Label>
          <S.Name
            type="text"
            defaultValue={name}
            placeholder="20글자 이내로 설정 가능합니다."
            onChange={onChangeName}
          ></S.Name>
          <S.Error>{nameError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Email
            type="text"
            defaultValue={email}
            placeholder="example@a.com"
            onChange={onChangeEmail}
            disabled={props.isEdit}
          ></S.Email>
          <S.Error>{emailError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={onChangePassword}
          ></S.Password>
          <S.Error>{passwordError}</S.Error>
        </S.InputWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? onClickUpdate : onClickCreate}
          isActive={isActive}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
