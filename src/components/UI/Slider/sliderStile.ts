import styled from "styled-components";
import "swiper/css/navigation";
import iconNext from "../../../assets/icons/button-icon-next.svg?react";
import iconPrev from "../../../assets/icons/button-icon-prev.svg?react";

interface SwiperButtonProps {
  $position?: "left" | "right";
}

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ButtonIconNext = styled(iconNext)`
  color: var(--green);
  font-size: 1.5rem;
`;

export const ButtonIconPrev = styled(iconPrev)`
  color: var(--green);
  font-size: 1.5rem;
`;

export const SwiperButton = styled.div.attrs<SwiperButtonProps>((prop) => ({
  className:
    prop.$position === "left" ? "swiper__button-prev" : "swiper__button-next",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  transition: opacity 0.3s;
  ${(prop) => (prop.$position === "left" ? "left: 0;" : "right: 0;")};

  &.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }
`;
