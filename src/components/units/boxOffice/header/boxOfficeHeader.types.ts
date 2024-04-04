import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoxOfficeArgs,
} from "../../../../commons/types/generated/types";

export interface IBoxOfficeHeaderProps {
  onChangeDateSelector: (d: unknown, ds: string | string[]) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoxOfficeArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoxOffice">>>;
}
