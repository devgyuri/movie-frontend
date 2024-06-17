import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";

export default function CategoryPage(): JSX.Element {
  return (
    <>
      <LayoutNavigation menuIndex={1} />
      <LayoutBody></LayoutBody>
    </>
  );
}
