import { useRouter } from "next/router";
import { useQueryFetchMovies } from "../../src/components/commons/hooks/queries/useQueryFetchMovies";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import MovieList from "../../src/components/commons/movieList/MovieList.index";

export default function SearchMovieListPage(): JSX.Element {
  const router = useRouter();
  const keyword =
    typeof router.query.keyword === "string" ? router.query.keyword : undefined;

  const { data, refetch } = useQueryFetchMovies({ keyword });

  return (
    <>
      <LayoutNavigation refetch={refetch} keyword={keyword} />
      <LayoutBody>
        <MovieList data={data?.fetchMovies} />
      </LayoutBody>
    </>
  );
}
