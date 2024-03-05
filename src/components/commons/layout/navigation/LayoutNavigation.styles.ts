import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 40px;
  height: 60px;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: white;
`;

export const HomeLogo = styled.div`
  margin-left: 20px;
  margin-right: 100px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  padding: 10px 20px;
  margin: 0px 60px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: #eeaa2b;
    color: #212121;
  }
`;

export const SelectedMenuItem = styled.div`
  padding: 10px 20px;
  margin: 0px 60px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  background-color: var(--primary-color);
  color: #212121;
`;
