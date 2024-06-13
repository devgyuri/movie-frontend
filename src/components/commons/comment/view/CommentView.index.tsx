import { useState } from "react";
import * as S from "./CommentView.styles";
import { ICommentViewProps } from "./CommentView.types";
import { useComment } from "../../hooks/customs/useComment";
import CommentWrite from "../write/CommentWrite.index";

export default function CommentView(props: ICommentViewProps): JSX.Element {
  const userPicture =
    props.data.user.picture === ""
      ? "/images/flower.jpg"
      : `http://storage.googleapis.com/example121232/${props.data.user.picture}`;

  console.log(props.data.star);

  const [isEdit, setIsEdit] = useState(false);

  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const { onClickDelete } = useComment({
    contents,
    star: props.data.star,
    movieId: "",
    setContents,
    setStar,
    setMyComment: props.setMyComment,
  });

  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.CommentWrapper isRep={props.isRep}>
            <S.TitleWrapper>
              <S.MainWrapper>
                <S.Picture url={userPicture} />
                <S.WriterWrapper>
                  <S.Writer>{props.data.user.name}</S.Writer>
                  <S.Date>{props.data.created_at.substring(0, 10)}</S.Date>
                </S.WriterWrapper>
                <S.Star value={props.data.star} allowHalf disabled />
              </S.MainWrapper>
              {props.isMine && (
                <S.OptionalWrapper>
                  <S.UpdateIcon
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  />
                  <S.DeleteIcon onClick={onClickDelete(props.data.id)} />
                </S.OptionalWrapper>
              )}
            </S.TitleWrapper>
            {props.data.contents !== "" && (
              <S.ContentsWrapper>
                <S.Contents>{props.data.contents}</S.Contents>
              </S.ContentsWrapper>
            )}
          </S.CommentWrapper>
        </S.Wrapper>
      )}
      {isEdit && (
        <CommentWrite
          userInfo={props.userInfo}
          movieId={props.movieId}
          setMyComment={props.setMyComment}
          data={props.data}
          isEdit={isEdit}
        />
      )}
    </>
  );
}
