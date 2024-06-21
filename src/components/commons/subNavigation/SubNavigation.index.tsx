import * as S from "./SubNavigation.styles";
import { ISubNavigationProps } from "./SubNavigation.types";

export default function SubNavigation(props: ISubNavigationProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.GenreWrapper>
          {props.menus.map((el) => {
            return (
              <S.GenreTag
                key={el.tagId}
                isActive={el.tagId === props.tagId}
                onClick={props.onClickTag(el.tagId)}
              >
                {el.name}
              </S.GenreTag>
            );
          })}
        </S.GenreWrapper>
      </S.Wrapper>
    </>
  );
}
