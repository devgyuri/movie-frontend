import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutNavigation from "../../src/components/commons/layout/navigation/LayoutNavigation.index";
import Login from "../../src/components/commons/login/Login.index";

export default function LoginPage(): JSX.Element {
  return (
    <>
      <LayoutNavigation />
      <LayoutBody>
        <Login />
      </LayoutBody>
    </>
  );
}
