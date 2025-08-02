import BubleImage from "../../assets/images/buble.png";
import {
  Br,
  BubleImg,
  Elements,
  HeaderContainer,
  ButtonText,
  HeaderTitleblock,
  HeaderTitleBottom,
  HeaderTitleTop,
  HeadingBlock,
  HeadingBlockDescription,
  Italic,
  GradientGreen,
  GradientBlue,
  PortalImage,
  LaserImage,
  ButtonHeader,
  IconButton,
} from "./style";
import { Logo } from "../Logo/Logo";
import ImagePortal from "../../assets/images/rick-morty.png";
import ImageGun from "../../assets/images/laser-decor.png";
import { Link } from "react-router-dom";
import { CharactersHome } from "../CharactersHome/CharactersHome";

export const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <Logo $PaddingB="0" />
      </Link>
      <HeaderContainer>
        <Elements>
          <BubleImg src={`${BubleImage}`} alt="buble decorate element" />
          <PortalImage src={`${ImagePortal}`} alt="portal image" />
          <LaserImage src={`${ImageGun}`} alt="gun image" />
        </Elements>
        <HeaderTitleblock>
          <HeaderTitleTop>
            <Italic>The</Italic>
            <GradientBlue>Rick &</GradientBlue>
          </HeaderTitleTop>

          <HeaderTitleBottom>
            <GradientGreen>Morty</GradientGreen>
            <Italic $padding="30px">Wiki</Italic>
          </HeaderTitleBottom>
        </HeaderTitleblock>

        <HeadingBlock>
          <ButtonHeader
            $background="var(--bg-button-gradient)"
            $border="none"
            $borderRadius="100px"
            type="button"
          >
            <IconButton />
            <ButtonText>Watch Now</ButtonText>
          </ButtonHeader>

          <HeadingBlockDescription>
            Brilliant but boozy scientist Rick hijacks his fretful
            <Br />
            teenage grandson, Morty, for wild escapades
            <Br />
            in other worlds and alternate dimensions.
          </HeadingBlockDescription>
        </HeadingBlock>
      </HeaderContainer>
      <CharactersHome />
    </>
  );
};
