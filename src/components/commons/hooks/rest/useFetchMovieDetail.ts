import axios from "axios";
import { useEffect, useState } from "react";
import {
  IFetchMovieDetail,
  IMovieQueryResult,
} from "../../../../commons/types/rest/movieDetail.types";

export const useFetchMovieDetail = (): IFetchMovieDetail => {
  const [data, setData] = useState<IMovieQueryResult>();

  const fetchData = async (): Promise<void> => {
    const res = await axios.get(
      "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp",
      {
        params: {
          collection: "kmdb_new2",
          ServiceKey: process.env.NEXT_PUBLIC_KMDB_API_KEY,
          title: "파묘",
        },
      },
    );
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data: data };
};
