import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import BoxOffice from "../../src/components/units/boxOffice/BoxOffice.index";

export default function BoxOfficePage(): JSX.Element {
  return (
    <>
      <LayoutNavigation menuIndex={0} />
      <LayoutBody>
        <BoxOffice />
      </LayoutBody>
    </>
  );
}
