import { useFetchActorImage } from "../../commons/hooks/rest/useFetchActorImage";
import { IMovieDetailProps } from "./movieDetail.types";

export default function MovieDetail(props: IMovieDetailProps): JSX.Element {
  const actorNames = props.data?.actors.map((el) => {
    return el.name;
  });

  const { urls } = useFetchActorImage({ names: actorNames });

  return (
    <>
      Movie Detail Page
      {urls?.map((el) => {
        return el;
      })}
    </>
  );
}
