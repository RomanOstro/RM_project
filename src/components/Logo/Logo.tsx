import LogoImage from '../../assets/icons/logo-rm.svg?react'
import { LogoContainer } from './logoStyle'




export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage height={'48px'} width={'100%'} />
    </LogoContainer>
  )
}