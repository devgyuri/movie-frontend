import BoxOfficeBody from "./body/boxOfficeBody.index";
import BoxOfficeHeader from "./header/boxOfficeHeader.index";

export default function BoxOffice(): JSX.Element {
  return (
    <>
      <BoxOfficeHeader />
      <BoxOfficeBody />
    </>
  );
}
