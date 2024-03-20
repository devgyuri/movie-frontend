import axios from "axios";
import { useEffect, useState } from "react";
import { IMovieQueryResult } from "../../../../commons/types/rest/movieDetail.types";
import { IMovieQuery } from "./useFetchBoxOffice";

interface IUseFetchMovieDetailsArgs {
  movieQuery: IMovieQuery[];
}

interface IUseFetchMovieDetails {
  data?: IMovieQueryResult[];
  refetch: (newMovieQuery: IMovieQuery[]) => void;
}

export const useFetchMovieDetails = (
  args: IUseFetchMovieDetailsArgs,
): IUseFetchMovieDetails => {
  const [data, setData] = useState<IMovieQueryResult[]>();

  const fetchData = async ({
    movieQuery,
  }: IUseFetchMovieDetailsArgs): Promise<void> => {
    console.log("movie query: ", movieQuery);

    const results = await axios.all(
      movieQuery.map((el, index) => {
        return axios.get(
          "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp",
          {
            params: {
              collection: "kmdb_new2",
              ServiceKey: process.env.NEXT_PUBLIC_KMDB_API_KEY,
              title: el.title,
              releaseDts: el.openDt,
              releaseDte: el.openDt,
            },
          },
        );
      }),
    );

    setData(
      results.map((el) => {
        return el.data;
      }),
    );

    console.log("use fetch movie detail: ", results);
  };

  const refetch = (newMovieQuery: IMovieQuery[]) => {
    fetchData({ movieQuery: newMovieQuery });
  };

  useEffect(() => {
    fetchData({ movieQuery: args.movieQuery });
  }, [args.movieQuery]);
  return { data, refetch };
};
