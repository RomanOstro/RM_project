import { styled } from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  align-self: center;
`;

export const MissingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-start: 100px;
`;
