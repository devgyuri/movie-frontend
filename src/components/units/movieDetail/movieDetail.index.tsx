import { IMovieDetailProps } from "./movieDetail.types";
import ReactPlayer from "react-player";
import * as S from "./movieDetail.styles";

export default function MovieDetail(props: IMovieDetailProps): JSX.Element {
  console.log(props.data);

  const openYear = props.data?.open_dt.substring(0, 4);

  const actors = props.data?.actors;

  const gLen = props.data?.genres.length ?? 0;
  const genres: string[] = [];
  for (let i = 0; i < gLen; i++) {
    genres.push(props.data?.genres[i].name ?? "");
    if (i < gLen - 1) {
      genres.push(".");
    }
  }

  const posterUrl = props.data?.posters[0].url;

  const vodUrl = props.data?.vods[0]?.url.replace(
    "trailerPlayPop?pFileNm=",
    "play/",
  );

  return (
    <>
      Movie Detail Hello
      <S.Wrapper>
        <S.BackgroundImage url={posterUrl ?? ""}>
          <S.ContentWrapper>
            <S.CardWrapper>
              <S.Poster src={posterUrl}></S.Poster>
              <S.InfoWrapper>
                <S.OpenYear>{openYear}</S.OpenYear>
                <S.Title>{props.data?.title}</S.Title>
                <S.GenreWrapper>
                  {genres.map((el, idx) => {
                    if (el === ".") {
                      return <S.Dot key={idx}>·</S.Dot>;
                    } else {
                      return <S.Genre key={idx}>{el}</S.Genre>;
                    }
                  })}
                </S.GenreWrapper>
                <S.Summary>{props.data?.plot}</S.Summary>
                <S.IconWrapper>
                  <S.Favorite></S.Favorite>
                  <S.Watched></S.Watched>
                  <S.Star></S.Star>
                </S.IconWrapper>
                <S.VodButton>Watch Trailer</S.VodButton>
              </S.InfoWrapper>
            </S.CardWrapper>
          </S.ContentWrapper>
        </S.BackgroundImage>
        {/* {actors?.map((el, idx) => {
          return (
            <img
              key={idx}
              src={`https://image.tmdb.org/t/p/original/${el.url}`}
            />
          );
        })}
        <ReactPlayer url={vodUrl} controls={true} />
        <video
          src={vodUrl}
          width="300"
          controls
          preload="none"
          crossOrigin="anonymous"
        ></video> */}
      </S.Wrapper>
    </>
  );
}
