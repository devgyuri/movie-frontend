import dayjs from "dayjs";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoxOfficeArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

interface IUseDateSelectorArgs {
  refetch: (
    variables?: Partial<IQueryFetchBoxOfficeArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoxOffice">>>;
}

interface IUseDateSelector {
  dateString: string;
  onChangeDateSelector: (d: unknown, ds: string | string[]) => void;
}

export const useDateSelector = (
  args: IUseDateSelectorArgs,
): IUseDateSelector => {
  const yesterday = dayjs().subtract(1, "day");
  const [dateString, setDateString] = useState<string>(
    yesterday.format("YYYYMMDD"),
  );

  const onChangeDateSelector = (d: unknown, ds: string | string[]) => {
    const target = typeof ds === "string" ? ds : ds[0];
    const dStr = target.replaceAll("-", "");
    setDateString(dStr);

    args.refetch({
      date: dStr,
    });
  };

  return {
    dateString,
    onChangeDateSelector,
  };
};
