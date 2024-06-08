import dayjs from "dayjs";
import * as S from "./dateSelector.styles";
import { useDateSelector } from "../hooks/customs/useDateSelector";
import { IDateSelectorProps } from "./dateSelector.types";

export default function DateSelector(props: IDateSelectorProps): JSX.Element {
  return (
    <>
      <S.DateWrapper>
        <S.DateDisplay
          allowClear={false}
          suffixIcon
          defaultValue={props.yesterday}
          pickerValue={props.yesterday}
          size="large"
          onChange={props.onChangeDateSelector}
        />
      </S.DateWrapper>
    </>
  );
}
