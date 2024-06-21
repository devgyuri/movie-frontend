import dayjs from "dayjs";
import { useDateSelector } from "../../commons/hooks/customs/useDateSelector";
import { useQueryFetchBoxOffice } from "../../commons/hooks/queries/useQueryFetchBoxOffice";
import BoxOfficeBody from "./body/BoxOfficeBody.index";
import BoxOfficeHeader from "./header/BoxOfficeHeader.index";

export default function BoxOffice(): JSX.Element {
  const yesterday = dayjs().subtract(1, "day");

  const { data, refetch: boxOfficeRefetch } = useQueryFetchBoxOffice({
    date: yesterday.format("YYYYMMDD"),
  });

  const { onChangeDateSelector } = useDateSelector({
    boxOfficeRefetch,
  });

  return (
    <>
      <BoxOfficeHeader
        yesterday={yesterday}
        onChangeDateSelector={onChangeDateSelector}
      />
      <BoxOfficeBody data={data?.fetchBoxOffice} />
    </>
  );
}
