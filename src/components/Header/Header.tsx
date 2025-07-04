
import { Button } from "../UI/Button/Button";
import BubleImage from '../../assets/images/buble.png';
import { BubleImg, Elements, Gradient, HeaderContainer, ButtonText, HeaderTitleblock, HeaderTitleBottom, HeaderTitleTop, HeadingBlock, HeadingBlockDescription, Italic } from "./style";
import { Logo } from "../Logo/Logo";
import ButtonIcon from '../../assets/icons/button-watch-icon.svg?react';





export const Header = () => {

  return (

    <HeaderContainer>
      <Logo />
      <Elements>
        <BubleImg src={`${BubleImage}`} alt="buble decorate element" />
        {/* <PortalImg src=''/> */}
      </Elements>
      <HeaderTitleblock >
        <HeaderTitleTop>
          <Italic>The</Italic>
          <Gradient>Rick &</Gradient>
        </HeaderTitleTop>

        <HeaderTitleBottom>
          <Gradient>Morty</Gradient>
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
          $padding=" 13px 32px"
          type="button"
        >
          <ButtonIcon />
          <ButtonText>Watch Now</ButtonText>
        </Button>
        <HeadingBlockDescription>
          Блестящий, но вечно пьяный учёный Рик похищает своего капризного внука-подростка Морти, чтобы вместе с ним пускаться во все тяжкие в других мирах и альтернативных измерениях
        </HeadingBlockDescription>
      </HeadingBlock>


    </HeaderContainer>
  )
}