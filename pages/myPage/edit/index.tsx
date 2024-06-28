import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import { useQueryFetchUser } from "../../../src/components/commons/hooks/queries/useQueryFetchUser";
import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import UserInfoWrite from "../../../src/components/units/userInfo/write/UserInfoWrite.index";

export default function MyPageEditPage(): JSX.Element {
  useAuth();

  return (
    <>
      <LayoutNavigation menuIndex={2} />
      <LayoutBody>
        <UserInfoWrite isEdit={true} />
      </LayoutBody>
    </>
  );
}
