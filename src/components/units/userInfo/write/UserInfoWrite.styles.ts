import styled from "@emotion/styled";
import {
  IUserInfoWritePictureProps,
  IUserInfoWriteSubmitButtonProps,
} from "./UserInfoWrite.types";

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
  margin-bottom: 30px;
  border-radius: 100px;
  background-image: url(${(props: IUserInfoWritePictureProps) => props.url});
  background-size: cover;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

export const Name = styled.input`
  height: 40px;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Email = styled.input`
  height: 40px;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Password = styled.input`
  height: 40px;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Error = styled.div`
  height: 30px;
  margin-bottom: 10px;
  font-size: 15px;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 80px;
  background-color: ${(props: IUserInfoWriteSubmitButtonProps) =>
    props.isActive ? "var(--primary-color)" : "var(--light-gray)"};
  color: var(--white);
  font-size: 20px;
  border: none;
  border-radius: 40px;
  cursor: ${(props: IUserInfoWriteSubmitButtonProps) =>
    props.isActive ? "pointer" : "not-allowed"};

  :hover {
    background-color: ${(props: IUserInfoWriteSubmitButtonProps) =>
      props.isActive ? "white" : "var(--light-gray)"};
    color: ${(props: IUserInfoWriteSubmitButtonProps) =>
      props.isActive ? "var(--primary-color)" : "var(--white)"};
    border: ${(props: IUserInfoWriteSubmitButtonProps) =>
      props.isActive ? "2px solid var(--primary-color)" : "none"};
  }
`;
