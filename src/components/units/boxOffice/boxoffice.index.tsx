import { useDateSelector } from "../../commons/hooks/customs/useDateSelector";
import { useQueryFetchBoxOffice } from "../../commons/hooks/queries/useQueryFetchBoxOffice";
import { useFetchBoxOffice } from "../../commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetails } from "../../commons/hooks/rest/useFetchMovieDetails";
import BoxOfficeBody from "./body/boxOfficeBody.index";
import BoxOfficeHeader from "./header/boxOfficeHeader.index";

export default function BoxOffice(): JSX.Element {
  const { dateString, onChangeDateSelector } = useDateSelector();

  const { data } = useQueryFetchBoxOffice({
    date: dateString,
  });

  return (
    <>
      <BoxOfficeHeader onChangeDateSelector={onChangeDateSelector} />
      <BoxOfficeBody data={data} />
    </>
  );
}
