import styled from "@emotion/styled";
import { IGenreNavigationGenreTagProps } from "./genreNavigation.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GenreWrapper = styled.div`
  margin-top: 30px;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GenreTag = styled.div`
  width: 150px;
  height: 50px;
  background-color: ${(props: IGenreNavigationGenreTagProps) =>
    props.isActive ? "var(--primary-color)" : "white"};
  color: ${(props: IGenreNavigationGenreTagProps) =>
    props.isActive ? "white" : "black"};
  cursor: pointer;
  border-radius: 25px;
  font-size: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
