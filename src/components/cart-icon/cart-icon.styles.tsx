import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 35px;
  height: 35px;
  transition: 0.15s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 800px) {
    width: 45px;
    height: 45px;
  }
`;

export const CartIconContainer = styled.div`
  right: 7.5px;
  bottom: 4px;
  margin-left: 30px;
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
`;

export const ItemCount = styled.span`
  user-select: none;
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 8px;

  @media screen and (max-width: 800px) {
    bottom: 6px;
  }
`;
