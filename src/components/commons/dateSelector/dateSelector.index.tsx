import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import * as S from "./dateSelector.styles";
import { ConfigProvider } from "antd";

export default function DateSelector(): JSX.Element {
  const today = new Date();
  const [dateString, setDateString] = useState<string>(today.toString());
  const onChangeDatePicker = (_: unknown, ds: string | string[]) => {
    const target = typeof ds === "string" ? ds : ds[0];
    setDateString(target);
    console.log(target);
  };

  return (
    <>
      <S.DateWrapper>
        <S.DateDisplay
          allowClear={false}
          suffixIcon
          defaultValue={dayjs(today)}
          pickerValue={dayjs(today)}
          size="large"
          onChange={onChangeDatePicker}
        />
      </S.DateWrapper>
    </>
  );
}
