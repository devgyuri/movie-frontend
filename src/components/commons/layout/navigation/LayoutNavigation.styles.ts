import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 40px;
  height: 60px;
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

export const MenuWrapper = styled.div`
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

export const Picture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
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
