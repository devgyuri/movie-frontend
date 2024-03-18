import { useFetchMovieDetail } from "../hooks/rest/useFetchMovieDetail";
import * as S from "./Ranking.styles";
import { IRankingProps } from "./Ranking.types";

export default function Ranking(props: IRankingProps): JSX.Element {
  // const { data: movieDetail } = useFetchMovieDetail({ name: props.title });

  // const posters = movieDetail?.Data[0].Result[0].posters.split("|");

  return (
    <>
      <S.Wrapper>
        <S.CardWrapper>
          <S.InfoBox>
            <S.Info>
              <S.Title>{movieDetail?.Data[0].Result[0].title}</S.Title>
              <S.Star />
              <S.Genre>{movieDetail?.Data[0].Result[0].genre}</S.Genre>
              <S.Audience>344,954명</S.Audience>
              <S.Director>봉준호</S.Director>
            </S.Info>
          </S.InfoBox>
          <S.Ranking>{props.ranking}</S.Ranking>
          {/* <S.Poster src={posters?.[0]}></S.Poster> */}
        </S.CardWrapper>
      </S.Wrapper>
    </>
  );
}
