import { IUserEditProps } from "./UserEdit.types";
import * as S from "./UserEdit.styles";
import { useUpdateUser } from "../../commons/hooks/customs/useUpdateUser";
import { useUploads } from "../../commons/hooks/customs/useUploads";
import { useState } from "react";

export default function UserEdit(props: IUserEditProps): JSX.Element {
  const [fileUrl, setFileUrl] = useState("");

  const { onChangeName, onChangePassword, setPicture, onClickEdit } =
    useUpdateUser();
  const { fileRef, onChangeFile, onClickUpload } = useUploads({
    setFileUrl,
    setPicture,
  });

  return (
    <>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Picture
            onClick={onClickUpload}
            url={
              fileUrl === ""
                ? "/images/flower.jpg"
                : `http://storage.googleapis.com/example121232/${fileUrl}`
            }
          />
          <S.UploadFileHidden
            type="file"
            ref={fileRef}
            onChange={onChangeFile}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Email
            type="text"
            defaultValue={props.userData?.fetchUser.email}
            disabled
          ></S.Email>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이름</S.Label>
          <S.Name
            type="text"
            defaultValue={props.userData?.fetchUser.name}
            placeholder="20글자 이내로 설정 가능합니다."
            onChange={onChangeName}
          ></S.Name>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={onChangePassword}
          ></S.Password>
        </S.InputWrapper>
        <S.Label>사진</S.Label>
        <S.SubmitButton onClick={onClickEdit}>수정</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
