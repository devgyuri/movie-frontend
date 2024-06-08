import type Dayjs from "dayjs";

export interface IDateSelectorProps {
  yesterday: Dayjs.Dayjs;
  onChangeDateSelector: (d: unknown, ds: string | string[]) => void;
}
