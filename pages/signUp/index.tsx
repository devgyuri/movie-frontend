import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import UserInfoWrite from "../../src/components/units/userInfo/write/UserInfoWrite.index";

export default function signUpPage(): JSX.Element {
  return (
    <>
      <LayoutNavigation />
      <LayoutBody>
        <UserInfoWrite isEdit={false} />
      </LayoutBody>
    </>
  );
}
