import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import MovieDetail from "../../../src/components/units/movieDetail/movieDetail.index";

export default function MovieDetailPage(): JSX.Element {
  return (
    <>
      <LayoutNavigation />
      <MovieDetail />
    </>
  );
}
