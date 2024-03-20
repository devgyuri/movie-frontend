import axios from "axios";
import {
  IBoxOfficeList,
  IDailyBoxOfficeResult,
} from "../../../../commons/types/rest/bosOffice.types";
import { useEffect, useState } from "react";

export interface IMovieQuery {
  title: string;
  openDt: string;
}

interface IUseFetchBoxOfficeArgs {
  date: string;
}

interface IUseFetchBoxOffice {
  data?: IDailyBoxOfficeResult;
  movieQuery: IMovieQuery[];
  refetch: (newDate: string) => void;
}

export const useFetchBoxOffice = (
  args: IUseFetchBoxOfficeArgs,
): IUseFetchBoxOffice => {
  const [data, setData] = useState<IDailyBoxOfficeResult>();

  const [movieQuery, setMovieQuery] = useState<IMovieQuery[]>([]);

  const fetchData = async ({ date }: IUseFetchBoxOfficeArgs): Promise<void> => {
    const res = await axios.get(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
      {
        params: {
          key: process.env.NEXT_PUBLIC_KOBIS_API_KEY,
          targetDt: date,
        },
      },
    );
    setData(res.data);
    setMovieQuery(
      res.data?.boxOfficeResult.dailyBoxOfficeList.map((el: IBoxOfficeList) => {
        return {
          title: el.movieNm,
          openDt: el.openDt.replaceAll("-", ""),
        };
      }),
    );

    console.log("use fetch boxOffice: ", res.data);
  };

  const refetch = (newDate: string) => {
    fetchData({ date: newDate });
  };

  useEffect(() => {
    fetchData({ date: args.date });
  }, [args.date]);
  return { data, movieQuery, refetch };
};
