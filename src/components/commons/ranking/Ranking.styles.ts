import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0px;
  // background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: 80%;
  height: 300px;
  position: relative;
  // background-color: red;
`;

export const PosterWrapper = styled.div`
  width: 180px;
  height: 250px;
  position: absolute;
  left: 50px;
`;

export const Ranking = styled.div`
  font-size: 200px;
  font-style: italic;
  position: absolute;
  left: 75%;
  top: 50px;
  color: white;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
`;

export const Info = styled.div`
  width: 60%;
  margin-left: 40%;
  padding-top: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const Star = styled(Rate)`
  font-size: 50px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const Genre = styled.div`
  font-size: 20px;
`;

export const Audience = styled.div`
  font-size: 20px;
`;

export const Director = styled.div`
  font-size: 20px;
`;
