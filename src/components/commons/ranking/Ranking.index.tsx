import { useFetchMovieDetail } from "../hooks/rest/useFetchMovieDetail";
import MoviePoster from "../moviePoster/MoviePoster.index";
import * as S from "./Ranking.styles";
import { IRankingProps } from "./Ranking.types";

export default function Ranking(props: IRankingProps): JSX.Element {
  const { data: movieDetail } = useFetchMovieDetail({
    name: props.title,
    openDt: props.openDt,
  });

  const posters = movieDetail?.Data[0].Result[0].posters.split("|");

  console.log(props.title, " ", movieDetail);

  return (
    <>
      <S.Wrapper>
        <S.CardWrapper>
          <S.InfoBox>
            <S.Info>
              <S.Title>{props.title}</S.Title>
              <S.Star value={4.0} disabled />
              <S.Genre>{movieDetail?.Data[0].Result[0].genre}</S.Genre>
              <S.Audience>{props.audiAcc}명</S.Audience>
              <S.Director>
                {
                  movieDetail?.Data[0].Result[0].directors.director[0]
                    .directorNm
                }
              </S.Director>
            </S.Info>
          </S.InfoBox>
          <S.Ranking>{props.ranking}</S.Ranking>
          {/* <S.Poster src={posters?.[0]}></S.Poster> */}
          <S.PosterWrapper>
            <MoviePoster movieId="qqq" posterUrl={posters?.[0] ?? ""} />
          </S.PosterWrapper>
        </S.CardWrapper>
      </S.Wrapper>
    </>
  );
}
