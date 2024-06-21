import {
  IBoxOfficeToMovie,
  IQuery,
  IQueryFetchBoxOfficeArgs,
} from "../../../../commons/types/generated/types";
import { IDailyBoxOfficeResult } from "../../../../commons/types/rest/bosOffice.types";
import { IMovieQueryResult } from "../../../../commons/types/rest/movieDetail.types";

export interface IBoxOfficeBodyProps {
  data?: IBoxOfficeToMovie[];
}
