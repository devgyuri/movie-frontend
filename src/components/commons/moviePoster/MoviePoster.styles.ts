import styled from "@emotion/styled";
import { IMoviePosterPosterImgProps } from "./MoviePoster.types";
import { POSTER_URL } from "../../../commons/libraries/url";

export const Wrapper = styled.div`
  position: relative;
  width: 180px;
  height: 250px;

  :hover div:nth-of-type(2) {
    background: rgba(0, 0, 0, 0.3);
  }

  :hover div:nth-of-type(3) {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
`;

export const PosterImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--light-gray);
  background-image: url(${(props: IMoviePosterPosterImgProps) =>
    props.url ? POSTER_URL + props.url : "var(--gray)"});
  background-size: cover;
`;

export const DetailButton = styled.div`
  position: absolute;
  width: 100px;
  padding: 5px 0;
  left: 40px;
  top: 80px;
  text-align: center;
  background-color: var(--primary-color);
  border-radius: 15px;
  color: white;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.35s ease;
`;
