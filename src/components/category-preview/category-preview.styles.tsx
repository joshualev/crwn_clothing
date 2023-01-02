import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
`;

export const Title = styled(Link)`
  cursor: pointer;

  margin-bottom: 25px;

  color: #101820ff;
  font-size: 30px;
  font-family: "Seymour One", sans-serif;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1), 0px 8px 13px rgba(0, 0, 0, 0.1);
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 15px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }
`;
