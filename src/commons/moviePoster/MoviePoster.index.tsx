import Link from "next/link";
import {
  DetailButton,
  Overlay,
  PosterImg,
  Wrapper,
} from "./MoviePoster.styles";
import { useRouter } from "next/router";

export default function MoviePoster(props: any): JSX.Element {
  const router = useRouter();

  const onClickMoveToPage = () => {
    void router.push(`movieDetail/${props.movieId}`);
  };

  return (
    <>
      <Wrapper>
        <PosterImg src="/images/lalaland.jpg" />
        <Overlay />
        <DetailButton onClick={onClickMoveToPage}>상세보기</DetailButton>
      </Wrapper>
    </>
  );
}
