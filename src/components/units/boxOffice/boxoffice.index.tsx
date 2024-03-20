import { useDateSelector } from "../../commons/hooks/customs/useDateSelector";
import { useFetchBoxOffice } from "../../commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetails } from "../../commons/hooks/rest/useFetchMovieDetails";
import BoxOfficeBody from "./body/boxOfficeBody.index";
import BoxOfficeHeader from "./header/boxOfficeHeader.index";

export default function BoxOffice(): JSX.Element {
  const { dateString, onChangeDateSelector } = useDateSelector();

  const { data: boxOffice, movieQuery } = useFetchBoxOffice({
    date: dateString,
  });

  const { data: movieDetail } = useFetchMovieDetails({ movieQuery });
  return (
    <>
      <BoxOfficeHeader onChangeDateSelector={onChangeDateSelector} />
      <BoxOfficeBody boxOffice={boxOffice} movieDetail={movieDetail ?? []} />
    </>
  );
}
