import { useAuth } from "../src/components/commons/hooks/customs/useAuth";
import { useSearch } from "../src/components/commons/hooks/customs/useSearch";
import { useQueryFetchMovies } from "../src/components/commons/hooks/queries/useQueryFetchMovies";
import Ranking from "../src/components/commons/ranking/Ranking.index";

export default function Test3Page(): JSX.Element {
  const { data, refetch } = useQueryFetchMovies();
  const { keyword, onChangeSearchBar } = useSearch({ refetch });

  console.log(data?.fetchMovies);

  return (
    <>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearchBar}
      />
      {data?.fetchMovies.map((el, index) => {
        return (
          <Ranking
            key={el.id}
            title={el.title}
            ranking={index + 1}
            genre={el.genres?.[0].name ?? ""}
            directorNm={el.directors?.[0].name ?? ""}
            movieId={el.id}
            poster={el.posters?.[0]?.url ?? ""}
            audiAcc={0}
          />
        );
      })}
    </>
  );
}
