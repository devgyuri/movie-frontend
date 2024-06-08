import type Dayjs from "dayjs";

export interface IBoxOfficeHeaderProps {
  yesterday: Dayjs.Dayjs;
  onChangeDateSelector: (d: unknown, ds: string | string[]) => void;
}
