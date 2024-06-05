import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationProps } from "./LayoutNavigation.types";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useAuthState } from "../../hooks/customs/useAuthState";
import { useQueryFetchUser } from "../../hooks/queries/useQueryFetchUser";
import { useLogout } from "../../hooks/customs/useLogout";

const NAVIGATION_MENUS = [
  { name: "box office", page: "/boxOffice" },
  { name: "category", page: "/category" },
  { name: "my page", page: "/myPage" },
];

export default function LayoutNavigation(
  props: ILayoutNavigationProps,
): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { authState, setAuthState } = useAuthState();

  const { onClickLogout } = useLogout({ setAuthState });

  const { data } = useQueryFetchUser();

  const profileImg = data?.fetchUser.picture ?? "/images/flower.jpg";

  return (
    <S.Wrapper>
      <S.HomeLogo>M.Box</S.HomeLogo>
      <S.MenuWrapper>
        {NAVIGATION_MENUS.map((el, idx) =>
          idx === props.menuIndex ? (
            <Fragment key={el.page}>
              <S.SelectedMenuItem onClick={onClickMoveToPage(el.page)}>
                {el.name}
              </S.SelectedMenuItem>
            </Fragment>
          ) : (
            <Fragment key={el.page}>
              <S.MenuItem onClick={onClickMoveToPage(el.page)}>
                {el.name}
              </S.MenuItem>
            </Fragment>
          ),
        )}
      </S.MenuWrapper>
      {authState ? (
        <S.LoginWrapper>
          <S.Picture src={profileImg}></S.Picture>
          <S.Name onClick={onClickMoveToPage("/myPage")}>
            {data?.fetchUser.name}
          </S.Name>
          <S.SignUp onClick={onClickLogout}>로그아웃</S.SignUp>
        </S.LoginWrapper>
      ) : (
        <S.LoginWrapper>
          <S.Login onClick={onClickMoveToPage("/login")}>로그인</S.Login>
          <S.Logout onClick={onClickMoveToPage("/signUp")}>회원가입</S.Logout>
        </S.LoginWrapper>
      )}
    </S.Wrapper>
  );
}
