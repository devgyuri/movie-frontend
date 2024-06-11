import * as S from "./CommentView.styles";
import { ICommentViewProps } from "./CommentView.types";

export default function CommentView(props: ICommentViewProps): JSX.Element {
  const userPicture = "/images/flower.jpg";

  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.MainWrapper>
            <S.Picture url={userPicture} />
            <S.Writer>유저 이름</S.Writer>
            <S.Star value={3.5} allowHalf disabled />
          </S.MainWrapper>
          <S.OptionalWrapper>
            <S.UpdateIcon />
            <S.DeleteIcon />
          </S.OptionalWrapper>
        </S.TitleWrapper>
        <S.DateWrapper>
          <S.Date>2024-06-11</S.Date>
        </S.DateWrapper>
        {props.data.contents !== "" && (
          <S.ContentsWrapper>
            <S.Contents>{"내용"}</S.Contents>
          </S.ContentsWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
