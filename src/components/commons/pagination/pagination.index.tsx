import { IPaginationProps } from "./pagination.types";
import * as S from "./pagination.styles";

export default function Pagination(props: IPaginationProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.PageWrapper>
          {new Array(10).fill(1).map((_, index) => {
            return (
              <S.PageNumber
                onClick={props.onClickPage(index + 1)}
                isSelected={index + 1 === props.page}
              >
                {index + 1}
              </S.PageNumber>
            );
          })}
        </S.PageWrapper>
      </S.Wrapper>
    </>
  );
}
