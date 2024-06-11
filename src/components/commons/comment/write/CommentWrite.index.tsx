import * as S from "./CommentWrite.styles";
import { ChangeEvent, useState } from "react";
import { ICommentWriteProps } from "./CommentWrite.types";
import { useComment } from "../../hooks/customs/useComment";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const { onChangeContents, onClickCreate, onClickDelete } = useComment({
    contents,
    star,
    movieId: props.movieId,
    setContents,
    commentRefetch: props.commentRefetch,
  });

  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Picture
            url={
              props.userInfo.image === ""
                ? "/images/flower.jpg"
                : `http://storage.googleapis.com/example121232/${props.userInfo.image}`
            }
          />
          <S.Writer>{props.userInfo.name}</S.Writer>
          <S.Star allowHalf></S.Star>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.Contents onChange={onChangeContents} />
          <S.CounterWrapper>
            <S.Counter>{contents.length} / 200</S.Counter>
            <S.SubmitButton onClick={onClickCreate}>등록</S.SubmitButton>
          </S.CounterWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
