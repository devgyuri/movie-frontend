import Ranking from "../../../commons/ranking/Ranking.index";
import { IBoxOfficeBodyProps } from "./BoxOfficeBody.types";

export default function BoxOfficeBody(props: IBoxOfficeBodyProps): JSX.Element {
  // const { data: boxOffice } = useFetchBoxOffice({ date: props.dateString });
  // console.log(boxOffice);

  return (
    <>
      {props.data?.map((el) => {
        // console.log("title: ", el.movieNm);
        return (
          <Ranking
            key={el.movie.id}
            title={el.movie.title}
            star={el.movie.avg_star}
            ranking={el.rank}
            genre={el.movie.genres?.[0].name}
            directorNm={el.movie.directors?.[0].name}
            movieId={el.movie.id}
            poster={el.movie.posters?.[0].url}
            audiAcc={el.audi_acc}
          />
        );
      })}
    </>
  );
}
