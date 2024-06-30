import { MouseEvent, useState } from "react";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import { useQueryFetchMoviesByLatest } from "../../src/components/commons/hooks/queries/useQueryFetchMoviesByLatest";
import SubNavigation from "../../src/components/commons/subNavigation/SubNavigation.index";
import { NAVIGATION_LATEST } from "../../src/commons/libraries/navigation";
import MovieList from "../../src/components/commons/movieList/MovieList.index";
import Pagination from "../../src/components/commons/pagination/pagination.index";

export default function LatestPage(): JSX.Element {
  const [latestId, setLatestId] = useState(1);
  const [page, setPage] = useState(1);
  const { data, refetch } = useQueryFetchMoviesByLatest({ latestId, page });

  const onClickLatestTag =
    (tagId: number) => (event: MouseEvent<HTMLDivElement>) => {
      if (tagId !== latestId) {
        setPage(1);
      }
      setLatestId(tagId);
      refetch({
        latestId: tagId,
      });
    };

  const onClickPage =
    (pageNum: number) => (event: MouseEvent<HTMLDivElement>) => {
      setPage(pageNum);
      refetch({
        latestId,
        page,
      });
    };

  return (
    <>
      <LayoutNavigation menuIndex={2} />
      <LayoutBody>
        <SubNavigation
          tagId={latestId}
          onClickTag={onClickLatestTag}
          menus={NAVIGATION_LATEST}
        />
        <MovieList data={data?.fetchMoviesByLatest} />
        <Pagination page={page} onClickPage={onClickPage} />
      </LayoutBody>
    </>
  );
}
