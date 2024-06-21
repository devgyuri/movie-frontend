import { MouseEvent, useState } from "react";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import { useQueryFetchMoviesByLatest } from "../../src/components/commons/hooks/queries/useQueryFetchMoviesByLatest";
import SubNavigation from "../../src/components/commons/subNavigation/SubNavigation.index";
import { NAVIGATION_LATEST } from "../../src/commons/libraries/navigation";
import MovieList from "../../src/components/commons/movieList/MovieList.index";

export default function LatestPage(): JSX.Element {
  const [latestId, setLatestId] = useState(1);
  const { data, refetch } = useQueryFetchMoviesByLatest({ latestId });

  const onClickLatestTag =
    (tagId: number) => (event: MouseEvent<HTMLDivElement>) => {
      setLatestId(tagId);
      refetch({
        latestId: tagId,
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
      </LayoutBody>
    </>
  );
}
