import styled from "@emotion/styled";
import { Rate } from "antd";
import { ICommentWritePictureProps } from "./CommentWrite.types";

export const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Picture = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 20px;
  background-image: url(${(props: ICommentWritePictureProps) => props.url});
  background-size: cover;
`;

export const Writer = styled.div``;

export const Star = styled(Rate)`
  font-size: 24px;
  height: 24px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.textarea`
  margin-top: 10px;
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
