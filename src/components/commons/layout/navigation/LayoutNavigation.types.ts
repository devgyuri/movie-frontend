import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchMoviesArgs,
} from "../../../../commons/types/generated/types";

export interface ILayoutNavigationProps {
  menuIndex?: number;
  keyword?: string;
  refetch?: (
    variables?: Partial<IQueryFetchMoviesArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchMovies">>>;
}

export interface ILayoutNavigationPictureProps {
  url: string;
}
