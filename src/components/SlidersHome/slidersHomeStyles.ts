import styled from "styled-components";
import BackgroundImage from "../../assets/images/spiral.png";
import { HeadingTitle } from "../CharactersHome/charactersHomeStyle";

export const SlidersContainer = styled.section`
  padding-bottom: 80px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    right: 0;
    top: 0;
    height: 100%;
    width: 30%;
  }

  @media screen and (width <= 1620px) {
    &::before {
      background-position: 0 0;
    }
  }

  @media screen and (width <= 660px) {
    &::before {
      display: none;
    }
  }
`;

export const SliderList = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1720px;
  padding: 110px 32px 0;

  @media screen and (width <= 1620px) {
    max-width: 1440px;
  }
`;

export const ListTitle = styled(HeadingTitle)``;

// --- настройка слайдера в компоненте CharacterHome -- start
export const SlidersHomeBreakpoints = {
  "1620": {
    slidesPerView: 4,
  },
  "1340": {
    slidesPerView: 3,
  },

  "840": {
    slidesPerView: 2,
  },

  "0": {
    slidesPerView: 1,
  },
};
// END
