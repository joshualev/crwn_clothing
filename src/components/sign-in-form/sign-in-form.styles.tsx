import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
    font-family: "Seymour One", sans-serif;
    font-size: 20px;
  }

  span {
    color: #6b6b6b;
    font-weight: 600;
  }

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
