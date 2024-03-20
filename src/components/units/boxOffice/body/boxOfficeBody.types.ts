import { IDailyBoxOfficeResult } from "../../../../commons/types/rest/bosOffice.types";
import { IMovieQueryResult } from "../../../../commons/types/rest/movieDetail.types";

export interface IBoxOfficeBodyProps {
  dateString?: string;
  boxOffice?: IDailyBoxOfficeResult;
  movieDetail: IMovieQueryResult[];
}
