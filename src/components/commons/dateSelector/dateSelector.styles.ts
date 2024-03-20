import styled from "@emotion/styled";
import { DatePicker } from "antd";

export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateDisplay = styled(DatePicker)`
  border: none;
  width: 150px;

  & input {
    text-align: center;
  }
`;
