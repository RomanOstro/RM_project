import styled from "styled-components";

interface IInputItemProps {
  $width?: string;
}

export const InputItem = styled.input<IInputItemProps>`
  color: var(--main-color);
  background: var(--bg-color);
  border: 1px solid var(--blue);
  border-left: none;
  font-size: 1.2rem;
  height: 100%;
  padding: 0.6rem;
  outline: none;
  width:${prop => prop.$width || 'auto'}
`