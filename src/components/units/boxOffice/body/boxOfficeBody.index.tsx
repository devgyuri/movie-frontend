import { useFetchBoxOffice } from "../../../commons/hooks/rest/useFetchBoxOffice";
import Ranking from "../../../commons/ranking/Ranking.index";

export default function BoxOfficeBody(): JSX.Element {
  const { data: boxOffice } = useFetchBoxOffice({ date: "20240301" });

  console.log(boxOffice);

  return (
    <>
      <div>data: </div>
      {boxOffice?.boxOfficeResult?.dailyBoxOfficeList.map((el, index) => {
        return (
          <Ranking
            key={index}
            title={el.movieNm}
            ranking={index + 1}
            openDt={el.openDt}
            audiAcc={el.audiAcc}
          />
        );
      })}
    </>
  );
}
