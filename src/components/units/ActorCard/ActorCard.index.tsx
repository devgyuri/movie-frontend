import { ACTOR_URL } from "../../../commons/libraries/url";
import * as S from "./ActorCard.styles";
import { IActorCardProps } from "./ActorCard.types";

export default function ActorCard(props: IActorCardProps): JSX.Element {
  const imageUrl =
    props.data.url === ""
      ? "/images/unknown.png"
      : `${ACTOR_URL}${props.data.url}`;

  return (
    <>
      <S.Wrapper>
        <S.Image url={imageUrl}></S.Image>
        <S.Name>{props.data.name}</S.Name>
      </S.Wrapper>
    </>
  );
}
