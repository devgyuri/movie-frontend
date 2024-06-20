import {
  DetailButton,
  Overlay,
  PosterImg,
  Wrapper,
} from "./MoviePoster.styles";
import { useRouter } from "next/router";
import { IMoviePosterProps } from "./MoviePoster.types";
import { useMoveToPage } from "../hooks/customs/useMoveToPage";

export default function MoviePoster(props: IMoviePosterProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <Wrapper>
        <PosterImg url={props.posterUrl} />
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
