import axios from "axios";
import {
  IDailyBoxOfficeResult,
  IFetchBoxOffice,
} from "../../../../commons/types/rest/bosOffice.types";
import { useEffect, useState } from "react";

interface IUseFetchBoxOfficeArgs {
  date: string;
}

export const FetchBoxOffice = async (
  props: IUseFetchBoxOfficeArgs,
): Promise<IFetchBoxOffice> => {
  const [data, setData] = useState<IDailyBoxOfficeResult>();

  const res = await axios.get(
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    {
      params: {
        key: process.env.NEXT_PUBLIC_KOBIS_API_KEY,
        targetDt: props.date,
      },
    },
  );
  console.log("fetchBoxOffice test", res.data);
  setData(res.data);
  return { data };
};
