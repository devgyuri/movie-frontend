import { IUserEditProps } from "./UserEdit.types";
import * as S from "./UserEdit.styles";
import { useUpdateUser } from "../../commons/hooks/customs/useUpdateUser";

export default function UserEdit(props: IUserEditProps): JSX.Element {
  const { onChangeName, onChangePassword, onChangePicture, onClickEdit } =
    useUpdateUser();

  return (
    <>
      <S.Wrapper>
        <S.Label>이름</S.Label>
        <S.Name
          type="text"
          defaultValue={props.userData?.fetchUser.name}
          placeholder="20글자 이내로 설정 가능합니다."
          onChange={onChangeName}
        ></S.Name>
        <S.Label>비밀번호</S.Label>
        <S.Password
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChangePassword}
        ></S.Password>
        <S.Label>사진</S.Label>
        <S.Email
          type="text"
          defaultValue={props.userData?.fetchUser.picture}
          placeholder="사진 주소"
          onChange={onChangePicture}
        ></S.Email>
        <S.SubmitButton onClick={onClickEdit}>수정</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
