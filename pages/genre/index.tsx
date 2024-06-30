import { MouseEvent, useState } from "react";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import { useQueryFetchMoviesByGenre } from "../../src/components/commons/hooks/queries/useQueryFetchMoviesByGenre";
import MovieList from "../../src/components/commons/movieList/MovieList.index";
import SubNavigation from "../../src/components/commons/subNavigation/SubNavigation.index";
import { NAVIGATION_GENRES } from "../../src/commons/libraries/navigation";
import Pagination from "../../src/components/commons/pagination/pagination.index";

export default function GenrePage(): JSX.Element {
  const [genreId, setGenreId] = useState(1);
  const [page, setPage] = useState(1);
  const { data, refetch } = useQueryFetchMoviesByGenre({ genreId, page });

  const onClickGenreTag =
    (tagId: number) => (event: MouseEvent<HTMLDivElement>) => {
      if (genreId !== tagId) {
        setPage(1);
      }
      setGenreId(tagId);
      refetch({
        genreId: tagId,
      });
    };

  const onClickPage =
    (pageNum: number) => (event: MouseEvent<HTMLDivElement>) => {
      setPage(pageNum);
      refetch({
        genreId,
        page,
      });
    };

  return (
    <>
      <LayoutNavigation menuIndex={1} />
      <LayoutBody>
        <SubNavigation
          tagId={genreId}
          onClickTag={onClickGenreTag}
          menus={NAVIGATION_GENRES}
        />
        <MovieList data={data?.fetchMoviesByGenre} />
        <Pagination page={page} onClickPage={onClickPage} />
      </LayoutBody>
    </>
  );
}
