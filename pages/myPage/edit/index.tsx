import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import { useQueryFetchUser } from "../../../src/components/commons/hooks/queries/useQueryFetchUser";
import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import UserEdit from "../../../src/components/units/userInfoWrite/UserInfoWrite.index";

export default function MyPageEditPage(): JSX.Element {
  useAuth();

  const { data: userData } = useQueryFetchUser();

  return (
    <>
      <LayoutNavigation menuIndex={2} />
      <UserEdit userData={userData} isEdit={true} />
      <h1>myPage Edit</h1>
    </>
  );
}
