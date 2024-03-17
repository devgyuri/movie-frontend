import * as S from "./Ranking.styles";
import { IRankingProps } from "./Ranking.types";

export default function Ranking(props: IRankingProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.CardWrapper>
          <S.InfoBox>
            <S.Info>
              <S.Title>{props.title}</S.Title>
              <S.Star />
              <S.Genre>로맨스</S.Genre>
              <S.Audience>344,954명</S.Audience>
              <S.Director>봉준호</S.Director>
            </S.Info>
          </S.InfoBox>
          <S.Ranking>{props.ranking}</S.Ranking>
          <S.Poster src="/images/lalaland.jpg"></S.Poster>
        </S.CardWrapper>
      </S.Wrapper>
    </>
  );
}
