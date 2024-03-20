import DateSelector from "../src/components/commons/dateSelector/dateSelector.index";
import { useDateSelector } from "../src/components/commons/hooks/customs/useDateSelector";
import { useFetchBoxOffice } from "../src/components/commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetails } from "../src/components/commons/hooks/rest/useFetchMovieDetails";
import BoxOfficeHeader from "../src/components/units/boxOffice/header/boxOfficeHeader.index";

export default function TestPage(): JSX.Element {
  const { dateString, onChangeDateSelector } = useDateSelector();

  const { data, movieQuery } = useFetchBoxOffice({ date: dateString });

  const { data: md } = useFetchMovieDetails({ movieQuery });

  return (
    <>
      test page
      <DateSelector onChangeDateSelector={onChangeDateSelector} />
    </>
  );
}
