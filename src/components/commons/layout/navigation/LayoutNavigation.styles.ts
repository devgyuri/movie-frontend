import styled from "@emotion/styled";
import { ILayoutNavigationPictureProps } from "./LayoutNavigation.types";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 40px;
  height: 80px;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const HomeLogo = styled.div`
  margin-right: 5%;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const MenuWrapper = styled.nav`
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  width: 200px;
  padding: 10px 20px;
  margin: 0px 5%;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: var(--primary-color);
    color: #212121;
  }
`;

export const SelectedMenuItem = styled.div`
  width: 200px;
  padding: 10px 20px;
  margin: 0px 5%;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  background-color: var(--primary-color);
  color: #212121;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  text-align: right;
  align-items: center;
`;

export const Login = styled.div`
  width: 80px;
  margin-right: 30px;
  color: white;
  cursor: pointer;
`;

export const SignUp = styled.div`
  width: 80px;
  color: white;
  cursor: pointer;
`;

export const Picture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-image: url(${(props: ILayoutNavigationPictureProps) => props.url});
  background-size: cover;
`;

export const Name = styled.div`
  width: 80px;
  color: white;
  cursor: pointer;
`;

export const Logout = styled.div`
  width: 80px;
  color: white;
  cursor: pointer;
`;
