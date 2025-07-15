import styled from "styled-components";
import PrevIcon from "../../assets/svg/arrowButtonPrev-icon.svg?react";
import NextIcon from "../../assets/svg/arrowButtonNext-icon.svg?react";

export const IconPrev = styled(PrevIcon)`
  color: #ddd;
  font-size: 2.4rem;
`;
export const IconNext = styled(NextIcon)`
  color: #ddd;
  font-size: 2.4rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 0 2rem;
`;

export const PaginationList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: auto;
  gap: 8px;
`;

export const PaginationItem = styled.li`
  border: 1px solid var(--blue);
  border-radius: 0.2rem;

  &:first-child,
  &:last-child {
    border: none;
  }
`;

interface IPaginationButton {
  $isActive?: boolean;
}

export const PaginationButton = styled.button<IPaginationButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ $isActive }) => ($isActive ? "var(--blue)" : "transparent")};
  outline: none;
  color: var(--main-color);
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  height: 2.4rem;
  min-width: 2.4rem;
  width: auto;
  transition: color 0.2s;

  &:hover:not(:disabled) {
    color: #fbff00ff;
  }
`;
