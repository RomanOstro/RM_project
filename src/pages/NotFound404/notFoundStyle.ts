import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
`;

export const Content = styled.div``;

export const DescriptionItem = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: var(--main-color);
`;

export const LinkItem = styled(Link)`
  color: var(--blue);
`;
