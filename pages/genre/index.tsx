import { MouseEvent, useState } from "react";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import { useQueryFetchMoviesByGenre } from "../../src/components/commons/hooks/queries/useQueryFetchMoviesByGenre";
import MovieList from "../../src/components/commons/movieList/MovieList.index";
import SubNavigation from "../../src/components/commons/subNavigation/SubNavigation.index";
import { NAVIGATION_GENRES } from "../../src/commons/libraries/navigation";

export default function GenrePage(): JSX.Element {
  const [genreId, setGenreId] = useState(1);
  const { data, refetch } = useQueryFetchMoviesByGenre({ genreId });

  const onClickGenreTag =
    (tagId: number) => (event: MouseEvent<HTMLDivElement>) => {
      setGenreId(tagId);
      refetch({
        genreId: tagId,
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
      </LayoutBody>
    </>
  );
}
