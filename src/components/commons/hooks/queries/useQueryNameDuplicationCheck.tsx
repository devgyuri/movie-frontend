import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryNameDuplicationCheckArgs,
} from "../../../../commons/types/generated/types";

export const NAME_DUPLICATION_CHECK = gql`
  query nameDuplicationCheck($name: String!) {
    nameDuplicationCheck(name: $name)
  }
`;

export const useQueryNameDuplicationCheck = (
  variables: IQueryNameDuplicationCheckArgs,
): QueryResult<
  Pick<IQuery, "nameDuplicationCheck">,
  IQueryNameDuplicationCheckArgs
> => {
  const result = useQuery<
    Pick<IQuery, "nameDuplicationCheck">,
    IQueryNameDuplicationCheckArgs
  >(NAME_DUPLICATION_CHECK, { variables });
  return result;
};
