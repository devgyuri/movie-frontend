import axios from "axios";
import { useEffect, useState } from "react";

interface IUseFetchActorImageArgs {
  names?: string[];
}

interface IUseFetchActorImage {
  urls?: string[];
}

interface IFetchImagesArgs {
  actorsName?: string[];
}

export const useFetchActorImage = (
  args: IUseFetchActorImageArgs,
): IUseFetchActorImage => {
  const [urls, setUrls] = useState<string[]>();

  // const selectImages = (results) => {
  //   const images = results.map((el) => {
  //     return el.data.results[0].profile_path;
  //   });
  // };

  const fetchImages = async ({
    actorsName,
  }: IFetchImagesArgs): Promise<void> => {
    if (!actorsName) {
      return;
    }

    const results = await Promise.all(
      actorsName.map((el) => {
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
        return el.data.results[0].profile_path;
      }),
    );
  };

  useEffect(() => {
    fetchImages({ actorsName: args.names });
  }, []);

  return { urls };
};
