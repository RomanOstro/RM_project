import styled from "styled-components";
import CardLayout from "../../../assets/images/card-layout.svg?react";

export const CardContainer = styled.div`
  position: relative;
  padding: 16px 22px;
  max-width: 300px;
  border-radius: 15px;
`;
export const LayautCard = styled(CardLayout)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ImageBlock = styled.div`
  position: relative;
  height: 216px;
  width: 258px;
  z-index: 2;
`;
export const CardImage = styled.img`
  border-radius: 4px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const CardTitle = styled.p`
  position: relative;
  padding-block-start: 15px;
  font-size: 16px;
  font-weight: 500;
  z-index: 2;
`;
