import styled from "styled-components";
import CardLayout from "../../../assets/images/card-layout.svg?react";

export const CardContainer = styled.article<{ $adaptive?: boolean }>`
  position: relative;
  height: 296px;
  width: 295px;
  border-radius: 15px;
  ${({ $adaptive }) =>
    $adaptive &&
    `

  @media screen and (width <= 820px) {
    height: 204px;
    width: 200px;
  }

  @media screen and (width <= 680px) {
    height: 138px;
    width: 134px;
  }
  
  `}
`;
export const LayautCard = styled(CardLayout)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const CardContent = styled.div<{ $adaptive?: boolean }>`
  padding: 16px 18px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${({ $adaptive }) =>
    $adaptive &&
    `

@media screen and (width <= 820px) {
    padding: clamp(0.5rem, -1.929rem + 5.71vw, 1rem); //--отследить
  }
  
  `}
`;
export const ImageBlock = styled.div<{ $adaptive?: boolean }>`
  height: 216px;
  width: 258px;

  ${({ $adaptive }) =>
    $adaptive &&
    `

 @media screen and (width <= 820px) {
    height: 150px;
    width: 176px;
  }

  @media screen and (width <= 680px) {
    height: 100px;
    width: 118px;
  }
  
  `}
`;
export const CardImage = styled.img`
  border-radius: 4px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const CardTitle = styled.p<{ $adaptive?: boolean }>`
  position: relative;
  padding-block-start: 24px;
  font-size: 16px;
  font-weight: 500;
  z-index: 2;

  ${({ $adaptive }) =>
    $adaptive &&
    `

@media screen and (width <= 820px) {
    padding-block-start: clamp(0.625rem, 0.018rem + 1.43vw, 0.75rem);
    font-size: clamp(0.625rem, -0.589rem + 2.86vw, 0.875rem);
  }
  
  `}
`;
