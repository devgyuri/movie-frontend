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
import CommentList from "../../../src/components/commons/comment/list/CommentList.Index";

export default function MovieDetailPage(): JSX.Element {
  const router = useRouter();
  const movieId = router.query.movieId;

  if (typeof movieId !== "string") {
    console.log("movieId: ", movieId);
    return <></>;
  }

  const { data: movieData } = useQueryFetchMovieDetail({ id: movieId });

  const { data: commentsData } = useQueryFetchComments({
    movieId,
  });

  return (
    <>
      <LayoutNavigation />
      <MovieDetail data={movieData?.fetchMovie} />
      <ActorSlider data={movieData?.fetchMovie.actors} />
      {/* <MediaTab /> */}
      <CommentList
        commentsData={commentsData?.fetchComments}
        movieId={movieId}
      />
    </>
  );
}
