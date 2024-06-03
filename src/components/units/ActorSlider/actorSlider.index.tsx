import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ActorSlider.styles";
import ActorCard from "../actorCard/ActorCard.index";
import { IActorSliderProps } from "./ActorSlider.types";

function SampleNextArrow() {
  return <S.NextArrow />;
}

function SamplePrevArrow() {
  return <S.PrevArrow />;
}

export default function ActorSlider(props: IActorSliderProps): JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <S.NextArrow />,
    prevArrow: <S.PrevArrow />,
  };

  return (
    <>
      Test
      <S.Wrapper>
        <S.SliderContainer>
          <S.StyledSlider {...settings}>
            {props.data?.map((el, idx) => {
              return (
                <div key={idx}>
                  <ActorCard data={el} />
                </div>
              );
            })}
          </S.StyledSlider>
        </S.SliderContainer>
      </S.Wrapper>
    </>
  );
}
