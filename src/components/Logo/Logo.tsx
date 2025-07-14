import LogoImage from '../../assets/icons/logo-rm.svg?react'
import { LogoContainer } from './logoStyle'


interface ILogoProps {
  $PaddingB?: string;
  $marginB?: string;
}

export const Logo = (props: ILogoProps) => {

  return (
    <LogoContainer $paddingB={props.$PaddingB} $marginB={props.$marginB}>
      <LogoImage height={'48px'} width={'100%'} />
    </LogoContainer>
  )
}