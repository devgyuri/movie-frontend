import axios from "axios";
import { useEffect, useState } from "react";

export default function BoxOfficeBody(): JSX.Element {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await axios.get(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
      {
        params: {
          key: process.env.NEXT_PUBLIC_BOX_OFFICE_API_KEY,
          targetDt: "20240301",
        },
      },
    );
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>data: </div>
      {data.boxOfficeResult.dailyBoxOfficeList.map((el) => {
        return el.movieNm;
      })}
    </>
  );
}
