import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  cursor: pointer;

  min-width: 175px;
  width: auto;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 35px 0 35px;
  border-radius: 20px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  background-color: #007db5;

  color: #edf4f8;

  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: "Seymour One", sans-serif;

  transition: 0.2s;

  &:hover {
    background-color: #0296db;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #e7e7e7;
  color: #000000;
  text-align: center;
  line-height: 20px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #dc4c3a;
  color: #feffff;
  border-radius: 5px;

  &:hover {
    background-color: #e43f2a;
  }
`;

export const SignIn = styled(BaseButton)`
  border-radius: 5px;

  &.hover {
    background-color: #3f3e3e;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
