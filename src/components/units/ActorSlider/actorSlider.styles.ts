import styled from "@emotion/styled";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SliderContainer = styled.div`
  width: 80%;
`;

export const StyledSlider = styled(Slider)`
  .slick-next {
    color: black;
    position: relative;
    top: 7vh;
    right: 2vw;
  }

  .slick-prev {
    color: black;
    left: 0;
    position: relative;
    top: 7vh;
  }

  .slick-list {
    width: 80%;
    padding: 1;
    right: -20px;
  }
`;

export const Slide = styled.div`
  background-color: red;
  width: 80%;
  height: 200px;
`;

export const PrevArrow = styled(LeftCircleOutlined)`
  color: red;
  font-size: 20px;

  :hover,
  :focus {
    color: violet;
  }
`;

export const NextArrow = styled(RightCircleOutlined)`
  color: red;
  font-size: 20px;

  :hover,
  :focus {
    color: blue;
  }
`;
