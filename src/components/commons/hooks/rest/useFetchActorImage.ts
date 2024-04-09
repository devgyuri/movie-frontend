import axios from "axios";
import { useEffect, useState } from "react";

interface IUseFetchActorImageArgs {
  names?: string[];
}

interface IUseFetchActorImage {
  urls?: string[];
}

export const useFetchActorImage = (
  args: IUseFetchActorImageArgs,
): IUseFetchActorImage => {
  const [urls, setUrls] = useState<string[]>();

  useEffect(() => {
    const fetchActors = async () => {
      if (!args.names) {
        return;
      }

      const results = await Promise.all(
        args.names.map((el) => {
          return axios.get("https://api.themoviedb.org/3/search/person?", {
            params: {
              query: el,
              include_adult: false,
              language: "ko-KR",
              page: 1,
            },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
          });
        }),
      );

      console.log(results);
      setUrls(
        results.map((el) => {
          return el.data;
        }),
      );
    };
    fetchActors();
  }, [args.names]);

  return { urls };
};
