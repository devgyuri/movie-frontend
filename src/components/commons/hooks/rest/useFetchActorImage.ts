import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchActorImage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchActors = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/search/person?",
        {
          params: {
            query: "이도현",
            include_adult: false,
            language: "ko-KR",
            page: 1,
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        },
      );
      console.log(result?.data);
      console.log(result?.data?.results?.[0]);
      setData(result?.data);
    };
    fetchActors();
  }, []);

  return data;
};
