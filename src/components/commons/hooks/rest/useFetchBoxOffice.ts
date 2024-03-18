import axios from "axios";
import {
  IDailyBoxOfficeResult,
  IFetchBoxOffice,
} from "../../../../commons/types/rest/bosOffice.types";
import { useEffect, useState } from "react";

interface IUseFetchBoxOfficeArgs {
  date: string;
}

export const useFetchBoxOffice = (
  props: IUseFetchBoxOfficeArgs,
): IFetchBoxOffice => {
  const [data, setData] = useState<IDailyBoxOfficeResult>();

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
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    fetchData({ date: props?.date });
  }, []);
  return { data };
};
