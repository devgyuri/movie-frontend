import styled from "@emotion/styled";
import {
  IBackgroundImageProps,
  IMovieDetailPosterProps,
} from "./MovieDetail.types";
import {
  HeartOutlined,
  EyeOutlined,
  StarFilled,
  HeartFilled,
  EyeFilled,
} from "@ant-design/icons";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import { POSTER_URL } from "../../../commons/libraries/url";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 50px 0px;
  // background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${(props: IBackgroundImageProps) =>
    POSTER_URL + props.url});
  background-size: cover;
  background-position: 0 -120px;
  z-index: 1;

  ::after {
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
    z-index: -1;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const CardWrapper = styled.div`
  width: 80%;
  height: 320px;
  display: flex;
  flex-direction: row;
`;

export const Poster = styled.div`
  width: 230px;
  min-width: 230px;
  height: 320px;
  background-image: url(${(props: IMovieDetailPosterProps) =>
    props.url ? POSTER_URL + props.url : ""});
  background-size: cover;
  background-color: ${(props: IMovieDetailPosterProps) =>
    !props.url ? "var(--gray)" : "none"};
`;

export const InfoWrapper = styled.div`
  margin-left: 40px;
  color: var(--white);
`;

export const OpenYear = styled.div`
  margin-bottom: var(--margin-paragraph);
  font-size: 15px;
`;

export const Title = styled.div`
  margin-bottom: var(--margin-paragraph);
  font-weight: 700;
  font-size: 40px;
`;

export const GenreWrapper = styled.div`
  margin-bottom: var(--margin-paragraph);
  display: flex;
  flex-direction: row;
  font-size: 15px;
`;

export const Genre = styled.div``;

export const Dot = styled.div`
  margin: 0 5px;
`;

export const Summary = styled.div`
  margin-bottom: var(--margin-paragraph);
  max-height: 62px;
  overflow: hidden;
  font-size: 13px;
`;

export const IconWrapper = styled.div`
  margin-bottom: var(--margin-paragraph);
  display: flex;
  flex-direction: row;
  font-size: 18px;
`;

export const Count = styled.div`
  margin-right: 15px;
  padding: 2px 0;
  font-size: 14px;
`;

export const FavoriteOn = styled(HeartFilled)`
  margin-right: 5px;
  cursor: pointer;
  color: var(--primary-color);
`;

export const FavoriteOff = styled(HeartOutlined)`
  margin-right: 5px;
  cursor: pointer;
  color: white;
`;

export const WatchedOn = styled(EyeFilled)`
  margin-right: 5px;
  cursor: pointer;
  color: var(--primary-color);
`;

export const WatchedOff = styled(EyeOutlined)`
  margin-right: 5px;
  cursor: pointer;
  color: white;
`;

export const Star = styled(StarFilled)`
  margin-right: 5px;
  color: yellow;
`;

export const VodButton = styled.button<{ isActive: boolean }>`
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 20px;
  // background-color: var(--primary-color);
  background-color: ${(props) =>
    props.isActive ? "var(--primary-color)" : "var(--light-gray)"};
  color: var(--white);
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};

  :hover {
    color: ${(props) =>
      props.isActive ? "var(--primary-color)" : "var(--white)"};
    background-color: ${(props) =>
      props.isActive ? "var(--white)" : "var(--light-gray)"};
    border: ${(props) =>
      props.isActive ? "2px solid var(--primary-color)" : "none"};
  }
`;

export const VodModal = styled(Modal)`
  .ant-modal-content {
    background-color: var(--dark-gray);
  }
`;

export const CustomPlayer = styled(ReactPlayer)``;
