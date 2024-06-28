import {
  DetailButton,
  Overlay,
  PosterImg,
  Wrapper,
} from "./MoviePoster.styles";
import { useRouter } from "next/router";
import { IMoviePosterProps } from "./MoviePoster.types";
import { useMoveToPage } from "../hooks/customs/useMoveToPage";
import { useLazyQueryFetchRepPoster } from "../hooks/queries/useLazyQueryFetchPoster";
import { useEffect } from "react";

export default function MoviePoster(props: IMoviePosterProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [getRepPoster, { data }] = useLazyQueryFetchRepPoster({
    movieId: props.movieId,
  });

  useEffect(() => {
    if (!props.posterUrl) {
      getRepPoster();
    }
  }, [props]);

  return (
    <>
      <Wrapper>
        <PosterImg
          url={
            props.posterUrl ? props.posterUrl : data?.fetchRepPoster.url ?? ""
          }
        />
        <Overlay />
        <DetailButton
          onClick={onClickMoveToPage(`/movieDetail/${props.movieId}`)}
        >
          상세보기
        </DetailButton>
      </Wrapper>
    </>
  );
}
