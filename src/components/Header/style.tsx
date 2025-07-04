import styled from "styled-components"
// import { ButtonElement } from "../UI/Button/buttonStyle";
interface TPropsItalic {
  $padding?: string;
}



export const HeaderContainer = styled.div`
 width: 1476px;
 position: relative;
 margin: 0 auto;
`
export const HeaderTitleblock = styled.div`
   max-width: 1075px;
   margin:0 auto;
`

export const HeadingBlock = styled.div`
  display: flex;
  justify-self: center;
  gap: 90px;
  max-width: 690px;
  margin-top: 15px;
`

export const HeaderTitleTop = styled.h1`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 128px;
  text-transform: uppercase;
  pointer-events: none;

  &::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 10px;
  border-radius: 50px;
  right: -15px;
  top: -15px;
  background: linear-gradient(120deg, var(--green), var(--blue));
  }
`

export const HeaderTitleBottom = styled.h1`
font-weight: 800;
font-size: 128px;
text-transform: uppercase;
position: relative;
pointer-events: none;
`

export const HeadingBlockDescription = styled.p`
color: var(--blue);
font-size: 14px;
font-weight: 600;
`

export const Italic = styled.span<TPropsItalic>`
  font-style: italic;
  display: inline-block;
  padding-inline-start: ${props => props.$padding};
`

export const Gradient = styled.span`
  background-image: linear-gradient(50deg, var(--green), var(--blue), var(--blue));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
export const ButtonText = styled.span`
font-size: 20px;
font-weight: 500;
margin-left: 10px;
white-space: nowrap;
`

export const Elements = styled.div`
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const BubleImg = styled.img`
position: absolute;
left:0;
top: 0;
transform: translate(15%, 36%);
z-index: 99;
`