import { IQuery } from "../../../commons/types/generated/types";

export interface IUserEditProps {
  userData?: Pick<IQuery, "fetchUser">;
}

export interface IUserEditPictureProps {
  url: string;
}
