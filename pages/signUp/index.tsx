import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import UserInfoWrite from "../../src/components/units/userInfoWrite/UserInfoWrite.index";

export default function signUpPage(): JSX.Element {
  return (
    <>
      <LayoutNavigation />
      <UserInfoWrite isEdit={false} />
    </>
  );
}
