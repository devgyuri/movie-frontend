import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 510px;
  height: 727px;

  :hover div:nth-child(2) {
    background: rgba(0, 0, 0, 0.3);
  }

  :hover div:nth-child(3) {
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

export const PosterImg = styled.img`
  position: absolute;
  width: 510px;
  height: 727px;
`;

export const DetailButton = styled.div`
  position: absolute;
  width: 100px;
  left: 200px;
  top: 180px;
  text-align: center;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.35s ease;
`;
