import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  z-index: 5;

  display: flex;
  flex-direction: column;

  width: 300px;
  height: 400px;
  padding: 20px;

  background-color: white;
  border-radius: 20px;
  border: none;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  ${BaseButton},
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
  }
  user-select: none;

  @media screen and (max-width: 800px) {
    top: 145px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const Total = styled.span`
  font-size: 18px;
  margin-top: 30px;
  margin-right: 20px;

  display: flex;
  justify-content: flex-end;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
