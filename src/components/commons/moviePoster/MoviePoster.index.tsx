import Link from "next/link";
import {
  DetailButton,
  Overlay,
  PosterImg,
  Wrapper,
} from "./MoviePoster.styles";
import { useRouter } from "next/router";
import { IMoviePosterProps } from "./MoviePoster.types";

export default function MoviePoster(props: IMoviePosterProps): JSX.Element {
  const router = useRouter();

  const onClickMoveToPage = () => {
    void router.push(`movieDetail/${props.movieId}`);
  };

  return (
    <>
      <Wrapper>
        <PosterImg src={props.posterUrl} />
        <Overlay />
        <DetailButton onClick={onClickMoveToPage}>상세보기</DetailButton>
      </Wrapper>
    </>
  );
}
