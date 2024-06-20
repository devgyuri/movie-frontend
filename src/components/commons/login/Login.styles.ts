import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 20px;
  color: var(--gray);
  margin-bottom: 5px;
`;

export const Email = styled.input`
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Password = styled.input`
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 80px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  :hover {
    background-color: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
  }
`;

export const SocialLoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
