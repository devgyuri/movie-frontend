import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IProfile, IQuery } from "../../../../commons/types/generated/types";

export interface IUserInfoViewProps {
  data?: IProfile;
}

export interface IUserInfoViewPictureProps {
  url: string;
}
