import * as S from "./CommentWrite.styles";
import { ChangeEvent, useState } from "react";
import { ICommentWriteProps } from "./CommentWrite.types";
import { useComment } from "../../hooks/customs/useComment";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { commentStateKeys } from "../view/CommentView.index";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const [userInfo] = useRecoilState(userInfoState);

  const {
    contentsLength,
    onChangeContents,
    onChangeStar,
    onClickCreate,
    onClickUpdate,
  } = useComment({
    defaultData: props.data,
    movieId: props.movieId,
    setCommentState: props.setCommentState,
    refetchMovie: props.refetchMovie,
  });

  return (
    <>
      <S.TitleWrapper>
        <S.Picture
          url={
            userInfo.image === ""
              ? "/images/flower.jpg"
              : `http://storage.googleapis.com/example121232/${userInfo.image}`
          }
        />
        <S.Writer>{userInfo.name}</S.Writer>
        <S.Star
          defaultValue={props.data?.star}
          allowHalf
          onChange={onChangeStar}
        ></S.Star>
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <S.Contents
          defaultValue={props.data?.contents}
          onChange={onChangeContents}
        />
        <S.CounterWrapper>
          <S.Counter>{contentsLength} / 200</S.Counter>
          <S.SubmitButton
            onClick={
              props.commentState === commentStateKeys.EDIT
                ? onClickUpdate(props.data?.id ?? -1)
                : onClickCreate
            }
          >
            {props.commentState === commentStateKeys.EDIT ? "수정" : "등록"}
          </S.SubmitButton>
        </S.CounterWrapper>
      </S.ContentsWrapper>
    </>
  );
}
