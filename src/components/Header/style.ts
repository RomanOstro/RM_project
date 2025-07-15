import styled from "styled-components";
interface TPropsItalic {
  $padding?: string;
}

export const HeaderContainer = styled.div`
  width: 1476px;
  position: relative;
  margin: 0 auto;
  height: 511px;
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
`;

export const HeaderTitleTop = styled.h1`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 128px;
  text-transform: uppercase;
  pointer-events: none;
`;

export const HeaderTitleBottom = styled.h1`
  font-weight: 800;
  font-size: 128px;
  text-transform: uppercase;
  position: relative;
  pointer-events: none;
`;

export const HeadingBlockDescription = styled.p`
  color: var(--blue);
  font-size: 14px;
  font-weight: 600;
  margin-left: 90px;
  line-height: 1.1rem;
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
`;

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
`;

export const PortalImage = styled.img`
  height: 145px;
  left: 480px;
  position: absolute;
  top: 103px;
  width: 225px;
`;

export const LaserImage = styled.img`
  transform: rotate(45deg);
  bottom: 0;
  height: 237px;
  position: absolute;
  right: 0;
  width: 266px;
`;

export const Br = styled.br``;
