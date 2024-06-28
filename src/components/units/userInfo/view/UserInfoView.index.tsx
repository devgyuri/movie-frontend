import { useRecoilState } from "recoil";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./UserInfoView.styles";
import { IUserInfoViewProps } from "./UserInfoView.types";
import { userInfoState } from "../../../../commons/stores";

export default function UserInfoView(props: IUserInfoViewProps): JSX.Element {
  const [userInfo] = useRecoilState(userInfoState);
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Wrapper>
        <S.Picture
          url={
            !userInfo.image
              ? "/images/flower.jpg"
              : `http://storage.googleapis.com/example121232/${userInfo.image}`
          }
        />
        <S.InfoWrapper>
          <S.Label>이름</S.Label>
          <S.Name>{userInfo.name}</S.Name>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.Label>이메일</S.Label>
          <S.Email>{userInfo.email}</S.Email>
        </S.InfoWrapper>
        <S.EditButton onClick={onClickMoveToPage("/myPage/edit")}>
          회원정보 수정하기
        </S.EditButton>
      </S.Wrapper>
    </>
  );
}
