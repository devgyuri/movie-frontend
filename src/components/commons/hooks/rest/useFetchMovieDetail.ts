import axios from "axios";
import { useEffect, useState } from "react";
import {
  IFetchMovieDetail,
  IMovieQueryResult,
} from "../../../../commons/types/rest/movieDetail.types";

interface IUseFetchMovieDetailArgs {
  name: string;
  openDt: string;
}

export const useFetchMovieDetail = (
  props: IUseFetchMovieDetailArgs,
): IFetchMovieDetail => {
  const [data, setData] = useState<IMovieQueryResult>();

  const fetchData = async ({
    name,
    openDt,
  }: IUseFetchMovieDetailArgs): Promise<void> => {
    const releaseDt = openDt.replaceAll("-", "");

    const res = await axios.get(
      "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp",
      {
        params: {
          collection: "kmdb_new2",
          ServiceKey: process.env.NEXT_PUBLIC_KMDB_API_KEY,
          title: name,
          releaseDts: releaseDt,
          releaseDte: releaseDt,
        },
      },
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchData({ name: props?.name, openDt: props?.openDt });
  }, []);
  return { data };
};
