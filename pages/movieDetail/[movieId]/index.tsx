import { useRouter } from "next/router";
import { IMovie } from "../../../src/commons/types/generated/types";
import { useQueryFetchMovieDetail } from "../../../src/components/commons/hooks/queries/useQueryFetchMovieDetail";
import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import MovieDetail from "../../../src/components/units/movieDetail/movieDetail.index";
import ActorSlider from "../../../src/components/units/ActorSlider/actorSlider.index";

export default function MovieDetailPage(): JSX.Element {
  // const tempMovie = {
  //   actors: [{ name: "이도현" }, { name: "김고은" }],
  // };

  const router = useRouter();

  const movieId = String(router.query.movieId);

  const { data: movieData } = useQueryFetchMovieDetail({ id: movieId });

  return (
    <>
      <LayoutNavigation />
      <MovieDetail data={movieData?.fetchMovie} />
      <ActorSlider />
    </>
  );
}
