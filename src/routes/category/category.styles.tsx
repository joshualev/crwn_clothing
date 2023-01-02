import styled from "styled-components";

export const TopLevelContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const Title = styled.h2`
  color: #101820ff;
  font-size: 30px;
  font-family: "Seymour One", sans-serif;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1), 0px 8px 13px rgba(0, 0, 0, 0.1);
  line-height: 27px;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 30px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }
`;
