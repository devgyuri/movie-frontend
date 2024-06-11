import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { ICommentViewPictureProps } from "./CommentView.types";

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
  background-image: url(${(props: ICommentViewPictureProps) => props.url});
  background-size: cover;
`;

export const Writer = styled.div``;

export const Star = styled(Rate)`
  font-size: 16px;
  height: 24px;
  color: red;
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
  color: var(--light-gray);
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div`
  font-size: 16px;
  color: var(--gray);
`;
