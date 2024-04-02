import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchMovieToActor = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchMovieToActor = async () => {
      const movieId = 838209;
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?`,
        {
          params: {
            language: "ko-KR",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        },
      );
      console.log(result?.data);
      setData(result?.data);
    };
    fetchMovieToActor();
  }, []);

  return data;
};
