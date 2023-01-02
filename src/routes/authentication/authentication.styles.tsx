import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 50px auto;

  @media screen and (max-width: 950px) {
    width: 760px;
    gap: 50px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    gap: 60px;
  }
`;
