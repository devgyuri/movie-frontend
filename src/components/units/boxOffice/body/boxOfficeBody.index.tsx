import axios from "axios";
import { useEffect, useState } from "react";
import { IDailyBoxOfficeResult } from "../../../../commons/types/rest/bosOffice.types";
import MoviePoster from "../../../commons/moviePoster/MoviePoster.index";
import { useFetchBoxOffice } from "../../../commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetail } from "../../../commons/hooks/rest/useFetchMovieDetail";
import Ranking from "../../../commons/ranking/Ranking.index";

export default function BoxOfficeBody(): JSX.Element {
  const { data: boxOffice } = useFetchBoxOffice();
  const { data: movieDetail } = useFetchMovieDetail();

  const posters = movieDetail?.Data[0].Result[0].posters.split("|");

  return (
    <>
      <div>data: </div>
      {boxOffice?.boxOfficeResult.dailyBoxOfficeList.map((el, index) => {
        return <Ranking key={index} title={el.movieNm} ranking={index + 1} />;
      })}
      <div>movie detail</div>
      <div>{movieDetail?.KMAQuery}</div>
      <img src={posters?.[0]} />
      {/* <img src="http://file.koreafilm.or.kr/thm/02/99/18/33/tn_DPK021733.jpg" /> */}
      <MoviePoster movieId="qqq" />
    </>
  );
}
