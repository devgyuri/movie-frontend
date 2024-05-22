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
  .slick-slide > div {
    margin: 0 10px;
  }
`;

export const Slide = styled.div`
  background-color: red;
  width: 100%;
  height: 200px;
`;

export const PrevArrow = styled(LeftCircleOutlined)`
  color: var(--light-gray);
  font-size: 30px;

  :focus {
    color: var(--light-gray);
  }

  :hover {
    color: var(--primary-color);
  }
`;

export const NextArrow = styled(RightCircleOutlined)`
  color: var(--light-gray);
  font-size: 30px;

  :focus {
    color: var(--light-gray);
  }

  :hover {
    color: var(--primary-color);
  }
`;
