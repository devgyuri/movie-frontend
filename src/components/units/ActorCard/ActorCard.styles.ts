import styled from "@emotion/styled";
import { IActorCardImageProps } from "./ActorCard.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-bottom: 10px;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-image: url(${(props: IActorCardImageProps) => props.url});
  background-size: cover;
  background-position: center;
`;

export const Name = styled.div`
  margin-bottom: 0px;
  font-size: 15px;
  color: #111111;
`;

export const Role = styled.div`
  font-size: 12px;
  color: #888888;
`;
