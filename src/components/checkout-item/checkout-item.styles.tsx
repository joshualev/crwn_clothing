import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;

  min-height: 100px;
  padding: 5px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid darkgrey;

  color: #373333;

  font-size: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;

    font-size: 16px;
    text-align: center;

    gap: 5px;
    margin-top: 10px;
    padding: 0 0;
    margin-bottom: 0px;

    align-items: center;
  }

  @media screen and (max-width: 600px) {
    text-align: unset;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;

    min-width: 150px;
    aspect-ratio: 1.2;

    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media screen and (max-width: 800px) {
      margin-top: 10px;
      max-width: 250px;
    }
  }
`;

export const ProductName = styled.span`
  grid-column-start: 2;

  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100px;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    width: unset;
    grid-column-start: 2;
    margin-top: -150px;

    margin-left: 15px;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    width: unset;
    grid-column-start: 2;

    margin-top: -100px;
    margin-left: 15px;

    font-size: 20px;
  }
`;

export const Quantity = styled.span`
  text-align: center;

  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    grid-column-start: 2;

    margin-top: -230px;
    margin-left: 15px;

    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    grid-column-start: 2;

    margin-top: -120px;
    margin-left: 15px;

    font-size: 12px;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  width: 35px;

  padding: 5px;
  border-radius: 5px;
  background: #e0e0e0;

  font-size: 25px;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  transition: 0.15s;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &:active {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  @media screen and (max-width: 800px) {
    width: 30px;

    font-size: 12px;
  }
`;

export const Value = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 800px) {
    margin: 0 7.5px;
    font-size: 14px;
  }
`;

export const Price = styled.span`
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    grid-column-start: 2;
    margin-left: 15px;
    margin-top: -300px;
  }

  @media screen and (max-width: 500px) {
    grid-column-start: 2;

    margin-top: -190px;
    margin-left: 15px;
  }
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  margin: 0 auto;
  font-size: 15px;

  transition: 0.15s;

  &:hover {
    color: #da0c0c;
  }

  @media screen and (max-width: 800px) {
    grid-column-start: 2;

    margin-top: -60px;
    margin-left: 15px;

    border-bottom: 1px solid;

    letter-spacing: 0.85px;
  }
`;
