import { MouseEvent } from "react";

export interface IPaginationProps {
  page: number;
  onClickPage: (pageNum: number) => (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IPageNumberProps {
  isSelected: boolean;
}
