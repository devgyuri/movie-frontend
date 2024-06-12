import { useState } from "react";
import * as S from "./CommentView.styles";
import { ICommentViewProps } from "./CommentView.types";
import { useComment } from "../../hooks/customs/useComment";

export default function CommentView(props: ICommentViewProps): JSX.Element {
  const userPicture =
    props.data.user.picture === ""
      ? "/images/flower.jpg"
      : `http://storage.googleapis.com/example121232/${props.data.user.picture}`;

  console.log(props.data.star);

  const [contents, setContents] = useState("");

  const { onClickDelete } = useComment({
    contents,
    star: props.data.star,
    movieId: "",
    setContents,
  });

  return (
    <>
      <S.Wrapper>
        <S.CommentWrapper>
          <S.TitleWrapper>
            <S.MainWrapper>
              <S.Picture url={userPicture} />
              <S.WriterWrapper>
                <S.Writer>{props.data.user.name}</S.Writer>
                <S.Date>{props.data.created_at.substring(0, 10)}</S.Date>
              </S.WriterWrapper>
              <S.Star value={props.data.star} allowHalf disabled />
            </S.MainWrapper>
            <S.OptionalWrapper>
              <S.UpdateIcon />
              <S.DeleteIcon onClick={onClickDelete(props.data.id)} />
            </S.OptionalWrapper>
          </S.TitleWrapper>
          {props.data.contents !== "" && (
            <S.ContentsWrapper>
              <S.Contents>{props.data.contents}</S.Contents>
            </S.ContentsWrapper>
          )}
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  );
}
