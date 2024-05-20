import { IMovieDetailProps } from "./movieDetail.types";
import ReactPlayer from "react-player";
import * as S from "./movieDetail.style";

export default function MovieDetail(props: IMovieDetailProps): JSX.Element {
  console.log(props.data);

  const actors = props.data?.actors;

  const posterUrl = props.data?.posters[0].url;

  const stillUrl = props.data?.stills[0].url;
  console.log(stillUrl);

  const vodUrl = props.data?.vods[0].url.replace(
    "trailerPlayPop?pFileNm=",
    "play/",
  );

  return (
    <>
      Movie Detail page
      <S.Wrapper url={stillUrl ?? ""}>
        <S.CardWrapper>
          <S.Poster src={posterUrl}></S.Poster>
          <S.InfoWrapper>
            <S.OpenDate>{props.data?.open_dt}</S.OpenDate>
            <S.Title>{props.data?.title}</S.Title>
            <S.GenreWrapper>
              {props.data?.genres.map((el, idx) => {
                let genreText = el.name;

                if (idx < (props.data?.genres.length ?? 0) - 1) {
                  genreText += "    ·    ";
                }

                return <S.Genre key={idx}>{genreText}</S.Genre>;
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
