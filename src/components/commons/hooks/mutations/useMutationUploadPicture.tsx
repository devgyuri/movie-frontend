import { MutationTuple, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadPictureArgs,
} from "../../../../commons/types/generated/types";

export const UPLOAD_PICTURE = gql`
  mutation uploadPicture($picture: Upload!) {
    uploadPicture(picture: $picture) {
      url
    }
  }
`;

export const useMutationUploadPicture = (): MutationTuple<
  Pick<IMutation, "uploadPicture">,
  IMutationUploadPictureArgs
> => {
  const result = useMutation<
    Pick<IMutation, "uploadPicture">,
    IMutationUploadPictureArgs
  >(UPLOAD_PICTURE);
  return result;
};
