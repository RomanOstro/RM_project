import styled from "styled-components";

interface TBUttonProps {
  $background?: string;
  $border?: string;
  $borderRadius?: string;
  $padding?: string;
  $outline?: string;
}

export const ButtonElement = styled.button<TBUttonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.$background ?? "transparent"};
  border: ${(props) => props.$border ?? "1px solid currentColor"};
  padding: ${(props) => props.$padding ?? "0"};
  border-radius: ${(props) => props.$borderRadius ?? "0"};
  outline: ${(props) => props.$outline ?? "none"};
`;
