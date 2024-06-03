import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import BoxOffice from "../../src/components/units/boxOffice/BoxOffice.index";

export default function BoxOfficePage(): JSX.Element {
  return (
    <>
      <LayoutNavigation menuIndex={0} />
      <h1>boxOffice</h1>
      <BoxOffice />
    </>
  );
}
