import * as S from "./CommentWrite.styles";
import { ChangeEvent, useState } from "react";
import { ICommentWriteProps } from "./CommentWrite.types";
import { useComment } from "../../hooks/customs/useComment";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const { onChangeContents, onChangeStar, onClickCreate, onClickUpdate } =
    useComment({
      contents,
      star,
      movieId: props.movieId,
      setContents,
      setStar,
      setMyComment: props.setMyComment,
    });

  return (
    <>
      <S.Wrapper>
        <S.CommentWrapper>
          <S.TitleWrapper>
            <S.Picture
              url={
                props.userInfo.image === ""
                  ? "/images/flower.jpg"
                  : `http://storage.googleapis.com/example121232/${props.userInfo.image}`
              }
            />
            <S.Writer>{props.userInfo.name}</S.Writer>
            <S.Star allowHalf onChange={onChangeStar}></S.Star>
          </S.TitleWrapper>
          <S.ContentsWrapper>
            <S.Contents onChange={onChangeContents} />
            <S.CounterWrapper>
              <S.Counter>{contents.length} / 200</S.Counter>
              <S.SubmitButton
                onClick={
                  props.isEdit
                    ? onClickUpdate(props.data?.id ?? -1)
                    : onClickCreate
                }
              >
                {props.isEdit ? "수정" : "등록"}
              </S.SubmitButton>
            </S.CounterWrapper>
          </S.ContentsWrapper>
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  );
}
