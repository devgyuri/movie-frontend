import * as S from "./genreNavigation.styles";
import { IGenreNavigationProps } from "./genreNavigation.types";

const NAVIGATION_GENRES = [
  { name: "액션", genreId: 1 },
  { name: "SF", genreId: 2 },
  { name: "어드벤쳐", genreId: 3 },
  { name: "스릴러", genreId: 4 },
  { name: "로맨스", genreId: 11 },
];

export default function GenreNavigation(
  props: IGenreNavigationProps,
): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.GenreWrapper>
          {NAVIGATION_GENRES.map((el) => {
            return (
              <S.GenreTag
                key={el.genreId}
                isActive={el.genreId === props.genreId}
                onClick={props.onClickGenreTag(el.genreId)}
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
