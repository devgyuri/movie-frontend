import { useEffect, useState } from "react";
import CommentView from "../view/CommentView.index";
import * as S from "./CommentList.styles";
import { ICommentListProps } from "./CommentList.types";
import { useRecoilState } from "recoil";
import { authState, userInfoState } from "../../../../commons/stores";
import { IComment } from "../../../../commons/types/generated/types";

export default function CommentList(props: ICommentListProps): JSX.Element {
  const [isAuth] = useRecoilState(authState);
  const [userInfo] = useRecoilState(userInfoState);

  const [myComment, setMyComment] = useState<IComment>();

  useEffect(() => {
    const filteredComment = props.commentsData?.filter((el) => {
      return el.user.id === userInfo.id;
    });
    setMyComment(filteredComment?.[0]);
    console.log("fetch comment", props.commentsData);
    console.log(filteredComment);
  }, [props.commentsData]);

  return (
    <>
      <S.Wrapper>
        {isAuth && myComment === undefined && (
          <>
            <CommentView
              data={myComment}
              movieId={props.movieId}
              isMine={true}
              refetchMovie={props.refetchMovie}
            />
            <S.Line />
          </>
        )}
        {props.commentsData?.map((el, index) => {
          return (
            <>
              <CommentView
                data={el}
                movieId={props.movieId}
                isMine={el.user.id === userInfo.id}
                refetchMovie={props.refetchMovie}
              />
              {index < (props.commentsData?.length ?? 0) - 1 ? (
                <S.Line />
              ) : (
                <></>
              )}
            </>
          );
        })}
      </S.Wrapper>
    </>
  );
}
