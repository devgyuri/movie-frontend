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

export default function MovieDetailPage(): JSX.Element {
  // const tempMovie = {
  //   actors: [{ name: "이도현" }, { name: "김고은" }],
  // };

  const [isAuth] = useRecoilState(authState);
  const [userInfo] = useRecoilState(userInfoState);

  const router = useRouter();

  const movieId = String(router.query.movieId);

  const { data: movieData } = useQueryFetchMovieDetail({ id: movieId });

  const { data: commentData } = useQueryFetchComments({
    movieId,
  });

  console.log("commentData: ", commentData);

  return (
    <>
      <LayoutNavigation />
      <MovieDetail data={movieData?.fetchMovie} />
      <ActorSlider data={movieData?.fetchMovie.actors} />
      {/* <MediaTab /> */}
      {isAuth && <CommentWrite userInfo={userInfo} movieId={movieId} />}
      {commentData?.fetchComments.map((el, index) => {
        return <CommentView key={index} data={el} />;
      })}
    </>
  );
}
