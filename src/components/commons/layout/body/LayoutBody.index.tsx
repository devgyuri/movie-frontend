import { ILayoutBodyProps } from "./LayoutBody.types";
import * as S from "./LayoutBody.styles";

export default function LayoutBody(props: ILayoutBodyProps): JSX.Element {
  return (
    <>
      <S.Wrapper>{props.children}</S.Wrapper>
    </>
  );
}
