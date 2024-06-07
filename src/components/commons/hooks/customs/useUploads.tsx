import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
} from "react";
import { useMutationUploadPicture } from "../mutations/useMutationUploadPicture";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export interface IUseUploadsArgs {
  setPicture: Dispatch<SetStateAction<string>>;
}

export interface IUseUploads {
  fileRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const useUploads = (args: IUseUploadsArgs): IUseUploads => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadPicture] = useMutationUploadPicture();

  const checkValidationImage = (file?: File): boolean => {
    if (file?.size === undefined) {
      alert("파일이 없습니다.");
      return false;
    }
    if (file?.size > MAX_FILE_SIZE) {
      alert("용량을 초과했습니다.");
      return false;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("파일 확장자가 올바르지 않습니다.");
      return false;
    }
    return true;
  };

  const onClickUpload = (): void => {
    console.log("onClickUpload");
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    console.log("onChangeFile");
    const picture = event.target.files?.[0];
    if (picture === undefined) {
      return;
    }
    const isValid = checkValidationImage(picture);
    if (!isValid) {
      return;
    }

    try {
      const result = await uploadPicture({ variables: { picture: picture } });
      args.setPicture(result.data?.uploadPicture.url ?? "");
      console.log(result.data?.uploadPicture.url);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    fileRef,
    onClickUpload,
    onChangeFile,
  };
};
