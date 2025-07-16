import styled from "styled-components";
import { ButtonElement } from "../UI/Button/buttonStyle";
import ButtonIcon from "../../assets/icons/button-watch-icon.svg?react";
interface TPropsItalic {
  $padding?: string;
}

export const HeaderContainer = styled.div`
  width: 1476px;
  position: relative;
  margin: 0 auto;
  height: 511px;

  @media screen and (width <= 1480px) {
    height: 480px;
    width: 880px;
  }

  @media screen and (width <= 1080px) {
    height: 420px;
    width: 680px;
  }

  @media screen and (width <= 820px) {
    height: 390px;
    width: 580px;
  }

  @media screen and (width <= 720px) {
    height: 300px;
    width: 420px;
  }

  @media screen and (width <= 470px) {
    height: 260px;
    width: 380px;
  }
`;
export const HeaderTitleblock = styled.div`
  height: 308px;
  left: 154px;
  position: absolute;
  top: 129px;
  width: 1075px;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 10px;
    border-radius: 50px;
    right: -15px;
    top: -15px;
    background: linear-gradient(120deg, var(--green), var(--blue));
  }

  @media screen and (width <= 1480px) {
    left: 0;
    width: 820px;
  }

  @media screen and (width <= 1080px) {
    width: 660px;
  }

  @media screen and (width <= 820px) {
    width: 570px;
  }

  @media screen and (width <= 720px) {
    top: 100px;
    width: 400px;

    &::before {
      height: 6px;
      right: -0.8rem;
      top: -0.8rem;
      width: 32px;
    }
  }

  @media screen and (width <= 470px) {
    left: 32px;
    top: 40px;
    width: 330px;

    &::before {
      display: none;
    }
  }
`;

export const HeadingBlock = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  left: 42%;
  margin-top: 16px;
  position: absolute;
  -webkit-transform: translateX(-42%);
  transform: translateX(-42%);

  @media screen and (width <= 1480px) {
    justify-content: center;
    width: 100%;
  }

  @media screen and (width <= 470px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding-inline-start: 32px;
    row-gap: 32px;
  }
`;

export const HeaderTitleTop = styled.h1`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 128px;
  text-transform: uppercase;
  pointer-events: none;

  @media screen and (width <= 1480px) {
    font-size: 100px;
  }

  @media screen and (width <= 1080px) {
    font-size: 80px;
  }

  @media screen and (width <= 820px) {
    font-size: 70px;
  }

  @media screen and (width <= 720px) {
    font-size: 48px;
  }

  @media screen and (width <= 470px) {
    font-size: 40px;
  }
`;

export const HeaderTitleBottom = styled.h1`
  font-weight: 800;
  font-size: 128px;
  text-transform: uppercase;
  position: relative;
  pointer-events: none;

  @media screen and (width <= 1480px) {
    font-size: 100px;
  }

  @media screen and (width <= 1080px) {
    font-size: 80px;
  }

  @media screen and (width <= 820px) {
    font-size: 70px;
  }

  @media screen and (width <= 720px) {
    font-size: 48px;
  }

  @media screen and (width <= 470px) {
    font-size: 40px;
  }
`;

export const HeadingBlockDescription = styled.p`
  color: var(--blue);
  font-size: 14px;
  font-weight: 600;
  margin-left: 90px;
  line-height: 1.1rem;

  @media screen and (width <= 1480px) {
    margin-left: 60px;
  }

  @media screen and (width <= 820px) {
    margin-left: 40px;
    font-size: 12px;
  }

  @media screen and (width <= 720px) {
    margin-left: 30px;
    font-size: 10px;
    line-height: 0.8rem;
  }

  @media screen and (width <= 470px) {
    margin-left: 0;
  }
`;

export const Italic = styled.span<TPropsItalic>`
  font-style: italic;
  display: inline-block;
  padding-inline-start: ${(props) => props.$padding};
`;

export const GradientBlue = styled.span`
  background-image: linear-gradient(
    45deg,
    var(--green),
    var(--blue),
    var(--blue)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const GradientGreen = styled.span`
  background-image: linear-gradient(
    45deg,
    var(--green),
    var(--green),
    var(--blue)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
export const ButtonText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  white-space: nowrap;

  @media screen and (width <= 820px) {
    font-size: 18px;
    margin-left: 8px;
  }

  @media screen and (width <= 720px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const IconButton = styled(ButtonIcon)`
  height: 20px;
  width: 20px;

  @media screen and (width <= 820px) {
    height: 18px;
    width: 18px;
  }

  @media screen and (width <= 720px) {
    height: 15px;
    width: 15px;
  }
`;

export const ButtonHeader = styled(ButtonElement)`
  width: 203px;
  height: 58px;

  @media screen and (width <= 820px) {
    height: 50px;
    width: 180px;
  }

  @media screen and (width <= 720px) {
    height: 36px;
    max-width: 126px;
  }
`;

// -- декор картинки

export const Elements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const BubleImg = styled.img`
  height: 270px;
  left: 20px;
  position: absolute;
  top: 0px;
  width: 270px;
  z-index: 99;

  @media screen and (width <= 1480px) {
    transform: translate(-61%, -3%);
  }

  @media screen and (width <= 820px) {
    width: 220px;
    height: 220px;
    transform: translate(-60%, 6%);
  }

  @media screen and (width <= 720px) {
    width: 110px;
    height: 110px;
    transform: translate(-70%, 42%);
  }

  @media screen and (width <= 470px) {
    width: 100px;
    height: 100px;
    transform: translate(-40%, -8%);
  }
`;

export const PortalImage = styled.img`
  height: 200px;
  left: 475px;
  position: absolute;
  top: 45px;
  width: 280px;

  @media screen and (width <= 1480px) {
    left: 237px;
    top: 79px;
    height: 140px;
    width: 215px;
  }

  @media screen and (width <= 1080px) {
    left: 185px;
    top: 76px;
    height: 128px;
    width: 200px;
  }

  @media screen and (width <= 820px) {
    left: 165px;
    top: 79px;
    height: 108px;
    width: 165px;
  }

  @media screen and (width <= 720px) {
    left: 114px;
    top: 54px;
    height: 85px;
    width: 120px;
  }

  @media screen and (width <= 470px) {
    left: 125px;
    top: 11px;
    height: 65px;
    width: 100px;
  }
`;

export const LaserImage = styled.img`
  transform: translate(-100%, -45%) rotate(48deg);
  bottom: 0;
  height: 150px;
  position: absolute;
  right: 0;
  width: 200px;

  @media screen and (width <= 1480px) {
    transform: translateX(-9%) rotate(48deg);
    bottom: 124px;
    width: 130px;
    height: 116px;
  }

  @media screen and (width <= 1080px) {
    transform: translateX(26%) rotate(48deg);
    bottom: 100px;
    width: 110px;
    height: 100px;
  }

  @media screen and (width <= 820px) {
    transform: translateX(26%) rotate(48deg);
    bottom: 100px;
    width: 90px;
    height: 80px;
  }

  @media screen and (width <= 720px) {
    transform: translateX(22%) rotate(48deg);
    bottom: 81px;
    width: 75px;
    height: 65px;
  }

  @media screen and (width <= 470px) {
    transform: translateX(19%) rotate(48deg);
    bottom: 133px;
    width: 50px;
    height: 43px;
  }
`;

export const Br = styled.br``;
