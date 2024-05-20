import styled from "@emotion/styled";
import { IWrapperProps } from "./movieDetail.types";
import { HeartOutlined, EyeOutlined, StarFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0px;
  // background-color: yellow;
  background-image: url(${(props: IWrapperProps) => props.url});
  background-size: cover;
  background-color: rgba(0, 0, 0, 80);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: row;
  // background-color: red;
`;

export const InfoWrapper = styled.div`
  width: 500px;
  height: 250px;
`;

export const Poster = styled.img`
  width: 200px;
  height: 280px;
`;

export const OpenDate = styled.div`
  font-size: 20px;
  color: white;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: white;
`;

export const GenreWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Genre = styled.div`
  font-size: 20px;
  color: white;
`;

export const Dot = styled.div`
  font-size: 20px;
  color: white;
`;

export const Summary = styled.p`
  color: white;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Favorite = styled(HeartOutlined)`
  width: 20px;
  color: white;
`;

export const Watched = styled(EyeOutlined)`
  width: 20px;
  color: white;
`;

export const Star = styled(StarFilled)`
  width: 20px;
  color: yellow;
`;

export const VodButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: var(--primary-color);
  color: white;
`;
