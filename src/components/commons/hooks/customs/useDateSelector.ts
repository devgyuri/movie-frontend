import dayjs from "dayjs";
import { useState } from "react";

interface IUseDateSelector {
  dateString: string;
  onChangeDateSelector: (d: unknown, ds: string | string[]) => void;
}

export const useDateSelector = (): IUseDateSelector => {
  const yesterday = dayjs().subtract(1, "day");
  const [dateString, setDateString] = useState<string>(
    yesterday.format("YYYYMMDD"),
  );

  const onChangeDateSelector = (d: unknown, ds: string | string[]) => {
    const target = typeof ds === "string" ? ds : ds[0];
    setDateString(target.replaceAll("-", ""));
  };

  return {
    dateString,
    onChangeDateSelector,
  };
};
