import dayjs from "dayjs";
import * as S from "./dateSelector.styles";
import { useDateSelector } from "../hooks/customs/useDateSelector";
import { IDateSelectorProps } from "./dateSelector.types";

export default function DateSelector(props: IDateSelectorProps): JSX.Element {
  const yesterday = dayjs().subtract(1, "day");

  return (
    <>
      <S.DateWrapper>
        <S.DateDisplay
          allowClear={false}
          suffixIcon
          defaultValue={yesterday}
          pickerValue={yesterday}
          size="large"
          onChange={props.onChangeDateSelector}
        />
      </S.DateWrapper>
    </>
  );
}
