import { useEffect, useState } from "react";
import { useDateSelector } from "../../commons/hooks/customs/useDateSelector";
import { useQueryFetchBoxOffice } from "../../commons/hooks/queries/useQueryFetchBoxOffice";
import { useFetchBoxOffice } from "../../commons/hooks/rest/useFetchBoxOffice";
import { useFetchMovieDetails } from "../../commons/hooks/rest/useFetchMovieDetails";
import BoxOfficeBody from "./body/BoxOfficeBody.index";
import BoxOfficeHeader from "./header/BoxOfficeHeader.index";
import { IQuery } from "../../../commons/types/generated/types";

export default function BoxOffice(): JSX.Element {
  const { data, refetch } = useQueryFetchBoxOffice({
    date: "20240403",
  });

  const { dateString, onChangeDateSelector } = useDateSelector({ refetch });

  return (
    <>
      <BoxOfficeHeader
        onChangeDateSelector={onChangeDateSelector}
        refetch={refetch}
      />
      <BoxOfficeBody data={data} />
    </>
  );
}
