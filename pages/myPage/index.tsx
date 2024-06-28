import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import { useQueryFetchUser } from "../../src/components/commons/hooks/queries/useQueryFetchUser";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import UserInfoView from "../../src/components/units/userInfo/view/UserInfoView.index";

export default function MyPagePage(): JSX.Element {
  useAuth();

  return (
    <>
      <LayoutNavigation />
      <LayoutBody>
        <UserInfoView />
      </LayoutBody>
    </>
  );
}
