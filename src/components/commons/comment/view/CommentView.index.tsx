import { useEffect, useState } from "react";
import * as S from "./CommentView.styles";
import { ICommentViewProps } from "./CommentView.types";
import { useComment } from "../../hooks/customs/useComment";
import CommentWrite from "../write/CommentWrite.index";

export const enum commentStateKeys {
  READ = 0,
  WRITE = 1,
  EDIT = 2,
}

export default function CommentView(props: ICommentViewProps): JSX.Element {
  const [commentState, setCommentState] = useState<commentStateKeys>(
    commentStateKeys.READ,
  );

  useEffect(() => {
    if (props.data === undefined) {
      setCommentState(commentStateKeys.WRITE);
    } else {
      setCommentState(commentStateKeys.READ);
    }
  }, [props]);

  const { onClickDelete } = useComment({
    defaultData: props.data,
    movieId: props.movieId,
    setCommentState,
    refetchMovie: props.refetchMovie,
  });

  const userPicture =
    props.data?.user.picture === ""
      ? "/images/flower.jpg"
      : `http://storage.googleapis.com/example121232/${props.data?.user.picture}`;

  return (
    <>
      <S.Wrapper>
        <S.CommentViewWrapper>
          {commentState === commentStateKeys.READ && (
            <S.CommentWrapper>
              <S.TitleWrapper>
                <S.MainWrapper>
                  <S.Picture url={userPicture} />
                  <S.WriterWrapper>
                    <S.Writer>{props.data?.user.name}</S.Writer>
                    <S.Date>{props.data?.created_at.substring(0, 10)}</S.Date>
                  </S.WriterWrapper>
                  <S.Star value={props.data?.star} allowHalf disabled />
                </S.MainWrapper>
                {props.isMine && (
                  <S.OptionalWrapper>
                    <S.UpdateIcon
                      onClick={() => {
                        setCommentState(commentStateKeys.EDIT);
                      }}
                    />
                    <S.DeleteIcon
                      onClick={onClickDelete(props.data?.id ?? -1)}
                    />
                  </S.OptionalWrapper>
                )}
              </S.TitleWrapper>
              {props.data?.contents !== "" && (
                <S.ContentsWrapper>
                  <S.Contents>{props.data?.contents}</S.Contents>
                </S.ContentsWrapper>
              )}
            </S.CommentWrapper>
          )}
          {(commentState === commentStateKeys.WRITE ||
            commentState === commentStateKeys.EDIT) && (
            <CommentWrite
              data={props.data}
              commentState={commentState}
              movieId={props.movieId}
              setCommentState={setCommentState}
              refetchMovie={props.refetchMovie}
            />
          )}
        </S.CommentViewWrapper>
      </S.Wrapper>
    </>
  );
}
