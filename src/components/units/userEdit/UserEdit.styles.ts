import styled from "@emotion/styled";
import { IUserEditPictureProps } from "./UserEdit.types";

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: 20px;
  color: var(--gray);
  margin-bottom: 5px;
`;

export const Picture = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-image: url(${(props: IUserEditPictureProps) => props.url});
  background-size: cover;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

export const Name = styled.input`
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Email = styled.input`
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Password = styled.input`
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 80px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  :hover {
    background-color: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
  }
`;
