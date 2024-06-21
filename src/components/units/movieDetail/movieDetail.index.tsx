import { IMovieDetailProps } from "./MovieDetail.types";
import * as S from "./MovieDetail.styles";
import { useEffect, useState } from "react";
import { useLike } from "../../commons/hooks/customs/useLike";
import { useSeen } from "../../commons/hooks/customs/useSeen";

export default function MovieDetail(props: IMovieDetailProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasVod, setHasVod] = useState(false);

  useEffect(() => {
    if (props.data?.vods[0]?.url) {
      setHasVod(true);
    }
  }, [props.data]);

  // movie information
  const openYear = props.data?.open_dt.substring(0, 4);

  const gLen = props.data?.genres.length ?? 0;
  const genres: string[] = [];
  for (let i = 0; i < gLen; i++) {
    genres.push(props.data?.genres[i].name ?? "");
    if (i < gLen - 1) {
      genres.push(".");
    }
  }

  const posterUrl = props.data?.posters?.[0]?.url;

  let vodUrl = props.data?.vods[0]?.url.replace(
    "trailerPlayPop?pFileNm=",
    "play/",
  );
  console.log("voidUrl: ", vodUrl);

  // test useQuery
  // const { data } = useQueryFetchLike({
  //   userId: 1,
  //   movieId: "F56776",
  // });
  // console.log("movie Detail", data);

  // icon control
  const movieId = props.data?.id ?? "";

  const {
    isLike,
    likeCount,
    onClickToggle: onClickLikeToggle,
  } = useLike({
    movieId,
  });

  const {
    isSeen,
    seenCount,
    onClickToggle: onClickSeenToggle,
  } = useSeen({ movieId });

  // modal control
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.BackgroundImage url={posterUrl ?? ""}>
          <S.ContentWrapper>
            <S.CardWrapper>
              <S.Poster url={posterUrl}></S.Poster>
              <S.InfoWrapper>
                <S.OpenYear>{openYear}</S.OpenYear>
                {/* <S.OpenYear>{props.data?.open_dt}</S.OpenYear> */}
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
                  {isLike ? (
                    <S.FavoriteOn onClick={onClickLikeToggle}></S.FavoriteOn>
                  ) : (
                    <S.FavoriteOff onClick={onClickLikeToggle}></S.FavoriteOff>
                  )}
                  <S.Count>{likeCount}</S.Count>
                  {isSeen ? (
                    <S.WatchedOn onClick={onClickSeenToggle}></S.WatchedOn>
                  ) : (
                    <S.WatchedOff onClick={onClickSeenToggle}></S.WatchedOff>
                  )}
                  <S.Count>{seenCount}</S.Count>
                  <S.Star></S.Star>
                  <S.Count>
                    {Number(props.data?.avg_star ?? 0).toFixed(2)}
                  </S.Count>
                </S.IconWrapper>
                <S.VodButton onClick={showModal} isActive={hasVod}>
                  Watch Trailer
                </S.VodButton>
              </S.InfoWrapper>
            </S.CardWrapper>
          </S.ContentWrapper>
        </S.BackgroundImage>
      </S.Wrapper>
      {hasVod && (
        <S.VodModal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          width={700}
        >
          <S.CustomPlayer url={vodUrl} controls={true} />
        </S.VodModal>
      )}
    </>
  );
}
