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
  width: auto;
`;

export const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: row;

  & > .slick-list {
    width: 900px;
  }
`;

export const Slide = styled.div`
  background-color: red;
  width: 100%;
  height: 200px;
`;

export const PrevArrow = styled(LeftCircleOutlined)`
  width: auto;
  height: auto;
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
  width: auto;
  height: auto;
  color: var(--light-gray);
  font-size: 30px;

  :focus {
    color: var(--light-gray);
  }

  :hover {
    color: var(--primary-color);
  }
`;
