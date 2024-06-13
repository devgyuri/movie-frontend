import { useRouter } from "next/router";
import { useQueryFetchMovieDetail } from "../../../src/components/commons/hooks/queries/useQueryFetchMovieDetail";
import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import MovieDetail from "../../../src/components/units/movieDetail/MovieDetail.index";
import ActorSlider from "../../../src/components/units/actorSlider/ActorSlider.index";
import MediaTab from "../../../src/components/units/mediaTab/MediaTab.index";
import { authState, userInfoState } from "../../../src/commons/stores";
import { useRecoilState } from "recoil";
import CommentWrite from "../../../src/components/commons/comment/write/CommentWrite.index";
import { useQueryFetchComments } from "../../../src/components/commons/hooks/queries/useQueryFetchComments";
import CommentView from "../../../src/components/commons/comment/view/CommentView.index";
import { useEffect, useState } from "react";
import { IComment } from "../../../src/commons/types/generated/types";

export default function MovieDetailPage(): JSX.Element {
  const [isAuth] = useRecoilState(authState);
  const [userInfo] = useRecoilState(userInfoState);

  const router = useRouter();

  const movieId = String(router.query.movieId);

  const { data: movieData } = useQueryFetchMovieDetail({ id: movieId });

  const { data: commentData } = useQueryFetchComments({
    movieId,
  });

  const [myComment, setMyComment] = useState<IComment>();

  useEffect(() => {
    const filteredComment = commentData?.fetchComments.filter((el) => {
      return el.user.id === userInfo.id;
    });
    setMyComment(filteredComment?.[0]);
    console.log("fetch comment", commentData);
    console.log(filteredComment);
  }, [commentData]);

  console.log("commentData: ", commentData);

  return (
    <>
      <LayoutNavigation />
      <MovieDetail data={movieData?.fetchMovie} />
      <ActorSlider data={movieData?.fetchMovie.actors} />
      {/* <MediaTab /> */}
      {isAuth && myComment ? (
        <CommentView
          userInfo={userInfo}
          movieId={movieId}
          data={myComment}
          isRep={true}
          isMine={true}
          setMyComment={setMyComment}
        />
      ) : isAuth ? (
        <CommentWrite
          userInfo={userInfo}
          movieId={movieId}
          isEdit={false}
          setMyComment={setMyComment}
        />
      ) : (
        <></>
      )}
      {commentData?.fetchComments.map((el, index) => {
        return (
          <CommentView
            userInfo={userInfo}
            movieId={movieId}
            key={index}
            data={el}
            isRep={false}
            isMine={el.user.id === userInfo.id}
            setMyComment={setMyComment}
          />
        );
      })}
    </>
  );
}
