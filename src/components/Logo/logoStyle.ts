import styled from 'styled-components'

interface ILogoContainerParam {
  $paddingB?: string;
  $marginB?:string;
}

export const LogoContainer = styled.div<ILogoContainerParam>`
margin: 0 auto;
padding-block-start: 60px;
padding-block-end:${prop => prop.$paddingB ?? '60px'};
width: 227px;
margin-block-end: ${prop => prop.$marginB ?? '27px'};
`