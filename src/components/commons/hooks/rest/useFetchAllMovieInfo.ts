import axios from "axios";
import { useEffect } from "react";

export const useFetchAllMovieInfo = () => {
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await axios.get(
        "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp",
        {
          params: {
            collection: "kmdb_new2",
            ServiceKey: process.env.NEXT_PUBLIC_KMDB_API_KEY,
            // movieSeq: 19128
            // title: "소풍",
            releaseDts: "20200101",
            releaseDte: "20241231",
            sort: "prodYear,1", // 최신순
            listCount: 50,
            startCount: 0,
          },
        },
      );
      console.log(result?.data);
    };
    fetchAllData();
  }, []);
};
