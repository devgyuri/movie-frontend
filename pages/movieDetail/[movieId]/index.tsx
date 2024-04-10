import { IMovie } from "../../../src/commons/types/generated/types";
import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import MovieDetail from "../../../src/components/units/movieDetail/movieDetail.index";

export default function MovieDetailPage(): JSX.Element {
  const tempMovie = {
    actors: [{ name: "이도현" }, { name: "김고은" }],
  };

  return (
    <>
      <LayoutNavigation />
      <MovieDetail data={tempMovie} />
    </>
  );
}
