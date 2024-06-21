import MoviePoster from "../moviePoster/MoviePoster.index";
import * as S from "./Ranking.styles";
import { IRankingProps } from "./Ranking.types";

export default function Ranking(props: IRankingProps): JSX.Element {
  // const posters = movieDetail?.Data[0].Result[0].posters.split("|");

  return (
    <>
      <S.Wrapper>
        <S.CardWrapper>
          <S.InfoBox>
            <S.Info>
              <S.Title>{props.title}</S.Title>
              <S.Star value={props.star} allowHalf disabled />
              <S.Genre>{props.genre}</S.Genre>
              <S.Audience>
                {props.audiAcc
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                명
              </S.Audience>
              <S.Director>{props.directorNm}</S.Director>
            </S.Info>
          </S.InfoBox>
          <S.Ranking>{props.ranking}</S.Ranking>
          <S.PosterWrapper>
            <MoviePoster
              movieId={props.movieId}
              posterUrl={`${props.poster}`}
            />
          </S.PosterWrapper>
        </S.CardWrapper>
      </S.Wrapper>
    </>
  );
}
