import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-bottom: 90px;

    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 320px;
  margin-left: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Logo = styled.h1`
  font-size: 55px;
  color: #4169e1;

  font-family: "Luckiest Guy";

  color: #fff;
  text-shadow: 0px -3px 0 #212121, 0px -3px 0 #212121, 0px 3px 0 #212121,
    0px 3px 0 #212121, -3px 0px 0 #212121, 3px 0px 0 #212121, -3px 0px 0 #212121,
    3px 0px 0 #212121, -3px -3px 0 #212121, 3px -3px 0 #212121,
    -3px 3px 0 #212121, 3px 3px 0 #212121, -3px 9px 0 #212121, 0px 9px 0 #212121,
    3px 9px 0 #212121, 0 9.5px 0.5px rgba(0, 0, 0, 0.05),
    0 0 3px rgba(0, 0, 0, 0.05), 0 3px 1.5px rgba(0, 0, 0, 0.15),
    0 6px 3px rgba(0, 0, 0, 0.1), 0 9px 9px rgba(0, 0, 0, 0.125),
    0 12px 12px rgba(0, 0, 0, 0.1), 0 18px 18px rgba(0, 0, 0, 0.075);

  margin-top: 15px;

  @media screen and (max-width: 800px) {
    grid-row-start: 1;
    font-size: 30pt;
    margin: 0 auto;
    padding: 20px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;

  width: 180px;

  padding: 10px 15px;
  margin: 0 5px;

  border-radius: 15px;
  font-size: 15px;

  color: #fefefe;
  background-color: black;

  font-family: "Seymour One", sans-serif;

  text-align: center;

  transition: 0.2s;
  &:hover {
    background-color: #2e2e2e;
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin: 0 10px;
  }
`;
