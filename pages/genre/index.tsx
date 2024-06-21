import { MouseEvent, useState } from "react";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import { useQueryFetchMoviesByGenre } from "../../src/components/commons/hooks/queries/useQueryFetchMoviesByGenre";
import MovieList from "../../src/components/units/movieList/MovieList.index";
import GenreNavigation from "../../src/components/units/genreNavigation/genreNavigation.index";

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
        <GenreNavigation genreId={genreId} onClickGenreTag={onClickGenreTag} />
        <MovieList data={data?.fetchMoviesByGenre} />
      </LayoutBody>
    </>
  );
}
