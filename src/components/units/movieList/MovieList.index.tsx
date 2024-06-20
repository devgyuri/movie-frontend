import * as S from "./MovieList.styles";
import { IMovieListProps } from "./MovieList.types";
import Ranking from "../../commons/ranking/Ranking.index";

export default function MovieList(props: IMovieListProps): JSX.Element {
  return (
    <>
      {props.data?.map((el, index) => {
        return (
          <Ranking
            key={el.id}
            title={el.title}
            ranking={index + 1}
            genre={el.genres?.[0].name ?? ""}
            directorNm={el.directors?.[0].name ?? ""}
            movieId={el.id}
            poster={el.posters?.[0]?.url ?? ""}
            audiAcc={el.audi_acc}
          />
        );
      })}
    </>
  );
}
