import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { ICommentViewPictureProps } from "./CommentView.types";

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  background-image: url(${(props: ICommentViewPictureProps) => props.url});
  background-size: cover;
`;

export const WriterWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.div``;

export const Star = styled(Rate)`
  font-size: 24px;
  height: 24px;
`;

export const OptionalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled(EditFilled)`
  width: 24px;
  height: 24px;
  color: var(--light-gray);
  cursor: pointer;
`;

export const DeleteIcon = styled(DeleteFilled)`
  width: 24px;
  height: 24px;
  color: var(--light-gray);
  cursor: pointer;
`;

export const DateWrapper = styled.div``;

export const Date = styled.div`
  font-size: 13px;
  color: var(--gray);
`;

export const ContentsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div`
  font-size: 16px;
  color: var(--dark-gray);
`;
