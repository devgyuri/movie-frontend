import { ChangeEvent, useState } from "react";
import { ApolloQueryResult } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import _ from "lodash";

export interface IUseSearch {
  keyword: string;
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IUseSearchArgs {
  refetch: (
    variables?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearch = (args: IUseSearchArgs): IUseSearch => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    args.refetch({ keyword: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return {
    keyword,
    onChangeSearchBar,
  };
};
