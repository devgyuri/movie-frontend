import { useMutation } from "@apollo/client";
import DateSelector from "../src/components/commons/dateSelector/dateSelector.index";
import { useDateSelector } from "../src/components/commons/hooks/customs/useDateSelector";
import { useQueryFetchBoxOffice } from "../src/components/commons/hooks/queries/useQueryFetchBoxOffice";
import { useFetchActorImage } from "../src/components/commons/hooks/rest/useFetchActorImage";
import { useFetchAllMovieInfo } from "../src/components/commons/hooks/rest/useFetchAllMovieInfo";
import { useFetchBoxOffice } from "../src/components/commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetails } from "../src/components/commons/hooks/rest/useFetchMovieDetails";
import { useFetchMovieToActor } from "../src/components/commons/hooks/rest/useFetchMovieToActor";
import { IMutation } from "../src/commons/types/generated/types";
import { useState } from "react";
import { useQueryFetchActorImage } from "../src/components/commons/hooks/queries/useQueryFetchActorImage";

export default function TestPage(): JSX.Element {
  const [url, setUrl] = useState("");

  // const { dateString, onChangeDateSelector } = useDateSelector();

  // const { data, movieQuery } = useFetchBoxOffice({ date: dateString });

  // const { data: md } = useFetchMovieDetails({ movieQuery });

  // useFetchAllMovieInfo();
  // const data = useFetchActorImage();
  // const data = useFetchMovieToActor();

  // const [url] = useMutationActorImage({
  //   name: "이도현",
  // });
  // console.log(url);

  // const [fetchImage] = useMutation<
  //   Pick<IMutation, "fetchActorImage">,
  //   IMutationFetchActorImageArgs
  // >(FETCH_ACTOR_IMAGE);

  // const onClickButton = async (): Promise<string | undefined> => {
  //   try {
  //     const result = await fetchImage({
  //       variables: {
  //         name: "이도현",
  //       },
  //     });
  //     setUrl(result.data?.fetchActorImage ?? "");
  //     return result.data?.fetchActorImage ?? "";
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     }
  //   }
  // };

  const { data } = useQueryFetchBoxOffice({
    date: "20240301",
  });
  console.log(data);

  const { data: imageData } = useQueryFetchActorImage({
    name: "이도현",
  });
  console.log(imageData);

  return (
    <>
      test page
      {/* <button onClick={onClickButton}>load image</button> */}
      <img
        src={`https://image.tmdb.org/t/p/original${imageData?.fetchActorImage}`}
      />
    </>
  );
}
