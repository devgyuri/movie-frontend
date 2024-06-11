import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { ICommentWritePictureProps } from "./CommentWrite.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-image: url(${(props: ICommentWritePictureProps) => props.url});
  background-size: cover;
`;

export const Writer = styled.div``;

export const Star = styled(Rate)`
  font-size: 16px;
  height: 24px;
  color: red;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.textarea`
  height: 80px;
  font-size: 16px;
  color: var(--dark-gray);
  resize: none;
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Counter = styled.div`
  font-size: 15px;
  color: var(--gray);
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  font-size: 16px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;
