import Ranking from "../../../commons/ranking/Ranking.index";
import { IBoxOfficeBodyProps } from "./boxOfficeBody.types";

export default function BoxOfficeBody(props: IBoxOfficeBodyProps): JSX.Element {
  // const { data: boxOffice } = useFetchBoxOffice({ date: props.dateString });
  // console.log(boxOffice);

  return (
    <>
      <div>data: </div>
      {props.movieDetail.map((el, index) => {
        // console.log("title: ", el.movieNm);
        return (
          <Ranking
            key={el.Data[0].Result[0].DOCID}
            title={
              props.boxOffice?.boxOfficeResult.dailyBoxOfficeList[index]
                .movieNm ?? ""
            }
            ranking={index + 1}
            genre={el.Data[0].Result[0].genre}
            directorNm={el.Data[0].Result[0].directors.director[0].directorNm}
            movieId={el.Data[0].Result[0].movieId}
            poster={el.Data[0].Result[0].posters.split("|")[0]}
            audiAcc={
              props.boxOffice?.boxOfficeResult.dailyBoxOfficeList[index]
                .audiAcc ?? "0"
            }
          />
        );
      })}
    </>
  );
}
