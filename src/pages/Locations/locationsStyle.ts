import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  justify-items: center;

  @media screen and (max-width: 1740px) {
    max-width: 1420px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1260px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MissingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-start: 100px;
`;
