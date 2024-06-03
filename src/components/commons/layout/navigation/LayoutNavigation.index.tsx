import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationProps } from "./LayoutNavigation.types";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

const NAVIGATION_MENUS = [
  { name: "box office", page: "/boxOffice" },
  { name: "category", page: "/category" },
  { name: "my page", page: "/myPage" },
];

export default function LayoutNavigation(
  props: ILayoutNavigationProps,
): JSX.Element {
  const { moveToPage, onClickMoveToPage } = useMoveToPage();

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
      <S.LoginWrapper>
        <S.Login onClick={onClickMoveToPage("/login")}>로그인</S.Login>
        <S.SignUp onClick={onClickMoveToPage("/signUp")}>회원가입</S.SignUp>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
