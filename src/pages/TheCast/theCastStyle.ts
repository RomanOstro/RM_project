import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px;
  justify-items: center;

  @media screen and (width <= 1740px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (width <= 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (width <= 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width <= 820px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media screen and (width <= 510px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const MissingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-start: 100px;
`;
