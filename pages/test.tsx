import DateSelector from "../src/components/commons/dateSelector/dateSelector.index";
import { useDateSelector } from "../src/components/commons/hooks/customs/useDateSelector";
import { useQueryFetchBoxOffice } from "../src/components/commons/hooks/queries/useQueryFetchBoxOffice";
import { useFetchActorImage } from "../src/components/commons/hooks/rest/useFetchActorImage";
import { useFetchAllMovieInfo } from "../src/components/commons/hooks/rest/useFetchAllMovieInfo";
import { useFetchBoxOffice } from "../src/components/commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetails } from "../src/components/commons/hooks/rest/useFetchMovieDetails";
import { useFetchMovieToActor } from "../src/components/commons/hooks/rest/useFetchMovieToActor";

export default function TestPage(): JSX.Element {
  // const { dateString, onChangeDateSelector } = useDateSelector();

  // const { data, movieQuery } = useFetchBoxOffice({ date: dateString });

  // const { data: md } = useFetchMovieDetails({ movieQuery });

  // useFetchAllMovieInfo();
  // const data = useFetchActorImage();
  // const data = useFetchMovieToActor();

  const { data } = useQueryFetchBoxOffice({
    date: "20240301",
  });
  console.log(data);

  return (
    <>
      test page
      {/* <img
        src={`https://image.tmdb.org/t/p/original${data?.results[0]?.profile_path}`}
      /> */}
    </>
  );
}
