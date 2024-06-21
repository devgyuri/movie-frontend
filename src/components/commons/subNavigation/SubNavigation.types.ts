import { MouseEvent } from "react";

export interface ISubNavigationProps {
  tagId: number;
  onClickTag: (tagId: number) => (event: MouseEvent<HTMLDivElement>) => void;
  menus: { name: string; tagId: number }[];
}

export interface ISubNavigationTagProps {
  isActive: boolean;
}
