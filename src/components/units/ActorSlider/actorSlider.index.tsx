import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./actorSlider.styles";

export default function ActorSlider(): JSX.Element {
  const settings = {
    lassName: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
    nextArrow: <S.NextArrow />,
    prevArrow: <S.PrevArrow />,
  };

  return (
    <>
      Hello
      <S.Wrapper>
        <S.SliderContainer>
          <Slider {...settings}>
            <div
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <S.Slide>
                <h3>1</h3>
              </S.Slide>
            </div>
            <div
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <S.Slide>
                <h3>2</h3>
              </S.Slide>
            </div>
            <div
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <S.Slide>
                <h3>3</h3>
              </S.Slide>
            </div>
            <div
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <S.Slide>
                <h3>4</h3>
              </S.Slide>
            </div>
            <div
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <S.Slide>
                <h3>5</h3>
              </S.Slide>
            </div>
            <div
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <S.Slide>
                <h3>6</h3>
              </S.Slide>
            </div>
            <div>
              <S.Slide>
                <h3>7</h3>
              </S.Slide>
            </div>
            <div>
              <S.Slide>
                <h3>8</h3>
              </S.Slide>
            </div>
            <div>
              <S.Slide>
                <h3>9</h3>
              </S.Slide>
            </div>
          </Slider>
        </S.SliderContainer>
      </S.Wrapper>
    </>
  );
}
