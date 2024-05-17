import { useQuery } from "@apollo/client";
import {
  FETCH_ACTOR_IMAGE,
  useQueryFetchActorImage,
} from "../../commons/hooks/queries/useQueryFetchActorImage";
import { useFetchActorImage } from "../../commons/hooks/rest/useFetchActorImage";
import { IMovieDetailProps } from "./movieDetail.types";
import ReactPlayer from "react-player";
import {
  IQuery,
  IQueryFetchActorImageArgs,
} from "../../../commons/types/generated/types";
import axios from "axios";

export default function MovieDetail(props: IMovieDetailProps): JSX.Element {
  console.log(props.data);

  const actorNames = props.data?.actors.map((el) => {
    return el.name;
  });

  const { urls } = useFetchActorImage({ names: actorNames });

  const vodUrl = props.data?.vods[0].url.replace(
    "trailerPlayPop?pFileNm=",
    "play/",
  );

  return (
    <>
      Movie Detail Page
      {urls?.map((el, idx) => {
        return (
          <img key={idx} src={`https://image.tmdb.org/t/p/original/${el}`} />
        );
      })}
      {/* <iframe
        src="https://www.kmdb.or.kr/trailer/trailerPlayPop?pFileNm=MK060910_P02.mp4"
        title="video"
        width="100%"
        height="500"
        frameBorder="0"
      ></iframe> */}
      <ReactPlayer url={vodUrl} controls={true} />
      {/* <video
        src="https://www.kmdb.or.kr/trailer/play/MK060910_P02.mp4"
        width="300"
        controls
        preload="none"
        crossOrigin="anonymous"
      ></video> */}
      <video
        src={vodUrl}
        width="300"
        controls
        preload="none"
        crossOrigin="anonymous"
      ></video>
    </>
  );
}
