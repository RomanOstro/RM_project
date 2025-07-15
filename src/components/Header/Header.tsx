
import { Button } from "../UI/Button/Button";
import BubleImage from '../../assets/images/buble.png';
import {
  Br, BubleImg, Elements, HeaderContainer, ButtonText, HeaderTitleblock, HeaderTitleBottom,
  HeaderTitleTop, HeadingBlock, HeadingBlockDescription, Italic, GradientGreen, GradientBlue, PortalImage, LaserImage
} from "./style";
import { Logo } from "../Logo/Logo";
import ButtonIcon from '../../assets/icons/button-watch-icon.svg?react';
import ImagePortal from '../../assets/images/rick-morty.png'
import ImageGun from '../../assets/images/laser-decor.png'
import { Link } from "react-router-dom";
import { CharactersHome } from "../CharactersHome/CharactersHome";





export const Header = () => {

  return (
    <>
      <Link to={'/'}><Logo $PaddingB="0" /></Link>
      <HeaderContainer>

        <Elements>
          <BubleImg src={`${BubleImage}`} alt="buble decorate element" />
          <PortalImage src={`${ImagePortal}`} alt="portal image" />
          <LaserImage src={`${ImageGun}`} alt='gun image' />
        </Elements>
        <HeaderTitleblock >

          <HeaderTitleTop>
            <Italic>The</Italic>
            <GradientBlue>Rick &</GradientBlue>
          </HeaderTitleTop>

          <HeaderTitleBottom>
            <GradientGreen>Morty</GradientGreen>
            <Italic
              $padding='30px'>Wiki
            </Italic>
          </HeaderTitleBottom>

        </HeaderTitleblock>


        <HeadingBlock>

          <Button
            $background='var(--bg-button-gradient)'
            $border="none"
            $borderRadius="100px"
            $padding="15px 26px"
            type="button"
          >
            <ButtonIcon />
            <ButtonText>Watch Now</ButtonText>
          </Button>

          <div>
            <HeadingBlockDescription>
              Brilliant but boozy scientist Rick hijacks his fretful
              <Br />teenage grandson, Morty, for wild escapades
              <Br />in other worlds and alternate dimensions.
            </HeadingBlockDescription>
          </div>
        </HeadingBlock>

      </HeaderContainer >
      <CharactersHome />
    </>
  )
}