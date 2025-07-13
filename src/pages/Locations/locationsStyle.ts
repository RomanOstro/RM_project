import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
`;

export const MissingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-start: 100px;
`;

export const Test = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
