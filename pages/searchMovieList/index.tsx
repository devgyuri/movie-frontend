import { useSearch } from "../../src/components/commons/hooks/customs/useSearch";
import { useQueryFetchMovies } from "../../src/components/commons/hooks/queries/useQueryFetchMovies";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import MovieList from "../../src/components/units/movieList/MovieList.index";

export default function SearchMovieListPage(): JSX.Element {
  const { data, refetch } = useQueryFetchMovies();

  return (
    <>
      <LayoutNavigation refetch={refetch} />
      <LayoutBody>
        <MovieList data={data?.fetchMovies} />
      </LayoutBody>
    </>
  );
}
