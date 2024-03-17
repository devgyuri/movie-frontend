import axios from "axios";
import {
  IDailyBoxOfficeResult,
  IFetchBoxOffice,
} from "../../../../commons/types/rest/bosOffice.types";
import { useEffect, useState } from "react";

export const useFetchBoxOffice = (): IFetchBoxOffice => {
  const [data, setData] = useState<IDailyBoxOfficeResult>();

  const fetchData = async (): Promise<void> => {
    const res = await axios.get(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
      {
        params: {
          key: process.env.NEXT_PUBLIC_KOBIS_API_KEY,
          targetDt: "20240301",
        },
      },
    );
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data };
};
