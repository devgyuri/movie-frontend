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
        {isAuth && (
          <CommentView
            data={myComment}
            movieId={props.movieId}
            isRep={true}
            isMine={true}
          />
        )}
        {props.commentsData?.map((el, index) => {
          return (
            <>
              <CommentView
                data={el}
                isRep={false}
                movieId={props.movieId}
                isMine={el.user.id === userInfo.id}
              />
              {index < (props.commentsData?.length ?? 0) ? <S.Line /> : <></>}
            </>
          );
        })}
      </S.Wrapper>
    </>
  );
}
