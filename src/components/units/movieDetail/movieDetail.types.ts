import { IMovie, IQuery } from "../../../commons/types/generated/types";

export interface IMovieDetailProps {
  data?: IMovie;
  // data?: tempMovie;
}

interface tempMovie {
  actors: tempActor[];
}

interface tempActor {
  name: string;
}
