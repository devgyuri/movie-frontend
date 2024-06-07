import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";

export default function MyPagePage(): JSX.Element {
  useAuth();

  return (
    <>
      <LayoutNavigation menuIndex={2} />
      <h1>myPage</h1>
    </>
  );
}
