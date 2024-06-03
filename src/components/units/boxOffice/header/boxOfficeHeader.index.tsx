import DateSelector from "../../../commons/dateSelector/dateSelector.index";
import { IBoxOfficeHeaderProps } from "./BoxOfficeHeader.types";

export default function BoxOfficeHeader(
  props: IBoxOfficeHeaderProps,
): JSX.Element {
  return (
    <>
      <DateSelector onChangeDateSelector={props.onChangeDateSelector} />
    </>
  );
}
