import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  border-radius: 20px;
`;

export const Body = styled.div`
  height: 90px;
  margin-top: 290px;

  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fefefe;
  opacity: 0.7;

  border-radius: 15px;
  position: absolute;

  transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
    font-family: "Seymour One", sans-serif;
  }

  p {
    font-weight: 800;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 300px;
  max-width: 800px;

  height: 400px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 7.5px 15px;
  overflow: hidden;

  transition: 0.2s;

  &:hover {
    cursor: pointer;

    & ${Body} {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    min-width: 96%;
  }
`;
