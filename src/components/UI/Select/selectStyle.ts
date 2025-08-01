import styled from "styled-components";

interface ISelectProps {
  $width?: string;
}

export const SelectElement = styled.select<ISelectProps>`
  background-color: var(--blue);
  height: 100%;
  padding: 0.4em;
  font-size: 1.2rem;
  border: none;
  outline: none;
  color: var(--main-color);
  width: ${({ $width }) => $width || "auto"};
`;

export const OptionItem = styled.option`
  background-color: var(--bg-color);
`;
