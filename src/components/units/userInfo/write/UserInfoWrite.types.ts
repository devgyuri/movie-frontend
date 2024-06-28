import { IQuery } from "../../../../commons/types/generated/types";

export interface IUserInfoWriteProps {
  userData?: Pick<IQuery, "fetchUser">;
  isEdit: boolean;
}

export interface IUserInfoWritePictureProps {
  url: string;
}

export interface IUserInfoWriteSubmitButtonProps {
  isActive: boolean;
}
