import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import SignUp from "../../src/components/commons/signUp/SignUp.index";
import UserInfoWrite from "../../src/components/units/userInfoWrite/UserInfoWrite.index";

export default function signUpPage(): JSX.Element {
  return (
    <>
      <LayoutNavigation />
      {/* <SignUp /> */}
      <UserInfoWrite isEdit={false} />
    </>
  );
}
