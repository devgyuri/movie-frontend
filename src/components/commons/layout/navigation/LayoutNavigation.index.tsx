import { Fragment, useEffect, useState } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationProps } from "./LayoutNavigation.types";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useLogout } from "../../hooks/customs/useLogout";
import { useRecoilState } from "recoil";
import { authState, userInfoState } from "../../../../commons/stores";
import { PROFILE_URL } from "../../../../commons/libraries/url";
import { useQueryFetchMovies } from "../../hooks/queries/useQueryFetchMovies";
import { useSearch } from "../../hooks/customs/useSearch";
import { useRouter } from "next/router";

const NAVIGATION_MENUS = [
  { name: "box office", page: "/boxOffice" },
  { name: "genre", page: "/genre" },
  { name: "my page", page: "/myPage" },
];

export default function LayoutNavigation(
  props: ILayoutNavigationProps,
): JSX.Element {
  const { refetch } = useQueryFetchMovies();
  const { keyword, onChangeSearchBar } = useSearch({
    refetch: props.refetch ?? refetch,
  });

  const router = useRouter();

  const { onClickMoveToPage } = useMoveToPage();

  const [userInfo] = useRecoilState(userInfoState);
  const [isAuth] = useRecoilState(authState);

  const { onClickLogout } = useLogout();

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
      <S.SearchWrapper>
        <S.SearchButton
          onClick={() => {
            router.push(
              {
                pathname: "/searchMovieList",
                query: { keyword },
              },
              "/searchMovieList",
            );
          }}
        />
        <S.SearchInput
          type="text"
          defaultValue={props.keyword}
          placeholder="검색어를 입력해주세요."
          onChange={onChangeSearchBar}
        />
      </S.SearchWrapper>
      {isAuth ? (
        <S.LoginWrapper>
          <S.Picture
            url={
              userInfo.image === ""
                ? "/images/flower.jpg"
                : `${PROFILE_URL}${userInfo.image}`
            }
          ></S.Picture>
          <S.Name onClick={onClickMoveToPage("/myPage")}>
            {userInfo.name}
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
