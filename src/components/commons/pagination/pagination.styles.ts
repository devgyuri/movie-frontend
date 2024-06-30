import styled from "@emotion/styled";
import { IPageNumberProps } from "./pagination.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PageNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IPageNumberProps) =>
    props.isSelected ? "var(--primary-color)" : "none"};
  color: ${(props: IPageNumberProps) =>
    props.isSelected ? "white" : "var(--black)"};
  cursor: pointer;
`;

export const UnselectedPage = styled.div`
  color: var(--black);
  cursor: pointer;
`;

export const SelectedPage = styled.div`
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;
