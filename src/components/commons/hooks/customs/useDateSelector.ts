import {
  IQuery,
  IQueryFetchBoxOfficeArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

interface IUseDateSelectorArgs {
  boxOfficeRefetch: (
    variables?: Partial<IQueryFetchBoxOfficeArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoxOffice">>>;
  // setDateString: Dispatch<SetStateAction<string>>;
}

interface IUseDateSelector {
  onChangeDateSelector: (d: unknown, ds: string | string[]) => void;
}

export const useDateSelector = (
  args: IUseDateSelectorArgs,
): IUseDateSelector => {
  const onChangeDateSelector = (d: unknown, ds: string | string[]) => {
    const target = typeof ds === "string" ? ds : ds[0];
    const dStr = target.replaceAll("-", "");
    // args.setDateString(dStr);

    args.boxOfficeRefetch({
      date: dStr,
    });
  };

  return {
    onChangeDateSelector,
  };
};
