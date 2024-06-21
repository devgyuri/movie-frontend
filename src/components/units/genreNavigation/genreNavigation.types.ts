import { MouseEvent } from "react";

export interface IGenreNavigationProps {
  genreId: number;
  onClickGenreTag: (
    tagId: number,
  ) => (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IGenreNavigationGenreTagProps {
  isActive: boolean;
}
