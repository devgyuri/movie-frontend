import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";

export default function MyPagePage(): JSX.Element {
  useAuth();

  return (
    <>
      <LayoutNavigation />
      <LayoutBody>myPage</LayoutBody>
    </>
  );
}
