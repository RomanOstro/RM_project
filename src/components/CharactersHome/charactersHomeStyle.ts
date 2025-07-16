import styled from "styled-components";
import { ButtonElement } from "../UI/Button/buttonStyle";

export const ContainerCharacters = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  max-width: 1720px;
  padding: 107px 32px 0;
  width: 100%;

  @media screen and (width <= 1620px) {
    max-width: 1440px;
  }

  @media screen and (width <= 660px) {
    padding: 50px 28px 0;
  }
`;

export const HeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-end: 35px;

  @media screen and (width <= 660px) {
    padding-block-end: 18px;
  }
`;

export const ButtonViewAll = styled(ButtonElement)`
  font-size: 18px;
  @media screen and (width <= 660px) {
    font-size: clamp(0.625rem, 0.007rem + 2.11vw, 0.875rem);
    padding: 8px 20px;
  }

  @media screen and (width <= 470px) {
    padding: 6px 16px;
  }
`;

export const HeadingTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;

  @media screen and (width <= 660px) {
    font-size: clamp(1rem, 0.382rem + 2.11vw, 1.25rem);
  }
`;

// --- настройка слайдера в компоненте CharacterHome -- start
export const sliderCharacterBreakpoints = {
  "1680": {
    slidesPerView: 5,
  },
  "1340": {
    slidesPerView: 4,
  },
  "1020": {
    slidesPerView: 3,
  },

  "660": {
    slidesPerView: 2,
  },

  "0": {
    slidesPerView: 1,
  },
};
// END
