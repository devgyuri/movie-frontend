import { useQueryFetchUser } from "../../../src/components/commons/hooks/queries/useQueryFetchUser";
import LayoutNavigation from "../../../src/components/commons/layout/navigation/LayoutNavigation.index";
import UserEdit from "../../../src/components/units/userEdit/UserEdit.index";

export default function MyPageEditPage(): JSX.Element {
  const { data: userData } = useQueryFetchUser();

  return (
    <>
      <LayoutNavigation menuIndex={2} />
      <UserEdit userData={userData} />
      <h1>myPage Edit</h1>
    </>
  );
}
