import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";

export default function MyPagePage(): JSX.Element {
  return (
    <>
      <LayoutNavigation menuIndex={2} />
      <h1>myPage</h1>
    </>
  );
}
