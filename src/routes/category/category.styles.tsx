import styled from "styled-components";

export const TopLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 15px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }
`;
