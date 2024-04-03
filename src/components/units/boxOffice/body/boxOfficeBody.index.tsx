import Ranking from "../../../commons/ranking/Ranking.index";
import { IBoxOfficeBodyProps } from "./boxOfficeBody.types";

export default function BoxOfficeBody(props: IBoxOfficeBodyProps): JSX.Element {
  // const { data: boxOffice } = useFetchBoxOffice({ date: props.dateString });
  // console.log(boxOffice);

  return (
    <>
      {props.data?.fetchBoxOffice.map((el, index) => {
        // console.log("title: ", el.movieNm);
        return (
          <Ranking
            key={el.id}
            title={el.title}
            ranking={index + 1}
            genre={el.genres[0].name}
            directorNm={el.directors[0].name}
            movieId={el.id}
            poster={el.posters[0].url}
            audiAcc="123,456"
          />
        );
      })}
    </>
  );
}
