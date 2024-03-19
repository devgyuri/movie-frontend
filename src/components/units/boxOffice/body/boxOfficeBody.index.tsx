import axios from "axios";
import { useEffect, useState } from "react";
import { IDailyBoxOfficeResult } from "../../../../commons/types/rest/bosOffice.types";
import MoviePoster from "../../../commons/moviePoster/MoviePoster.index";
import { useFetchBoxOffice } from "../../../commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetail } from "../../../commons/hooks/rest/useFetchMovieDetail";
import Ranking from "../../../commons/ranking/Ranking.index";
import { FetchBoxOffice } from "../../../commons/apis/rest/fethBoxOffice";

export default function BoxOfficeBody(): JSX.Element {
  // const { data: boxOffice } = await FetchBoxOffice({ date: "20240301" });
  const { data: boxOffice } = useFetchBoxOffice({ date: "20240301" });

  console.log(boxOffice);
  // const { data: movieDetail } = useFetchMovieDetail({ name: "파묘" });

  // const posters = movieDetail?.Data[0].Result[0].posters.split("|");

  return (
    <>
      <div>data: </div>
      {boxOffice?.boxOfficeResult?.dailyBoxOfficeList.map((el, index) => {
        // if (index < 1)
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
