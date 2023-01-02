import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  min-height: 90vh;

  @media screen and (max-width: 800px) {
    width: unset;
    margin: unset;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    padding: 10px 0;
  }
`;

export const HeaderBlock = styled.div`
  font-size: 35px;
  color: black;

  font-family: "Seymour One", sans-serif;

  text-transform: uppercase;
  margin: 0 auto;
`;

export const Total = styled.div`
  margin-top: 20px;
  margin-left: auto;
  font-size: 26px;
`;
