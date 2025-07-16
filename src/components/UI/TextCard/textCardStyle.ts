import styled from "styled-components";
import LayoutCard from "../../../assets/images/text-card-layout.svg?react";

export const CardContainer = styled.article`
  position: relative;
  @media screen and (max-width: 470px) {
    height: 80px;
    width: 325px;
  }
`;

export const CardLayout = styled(LayoutCard)`
  height: 96px;
  width: 360px;

  @media screen and (max-width: 820px) {
    height: 66px;
    width: 200px;
  }

  @media screen and (max-width: 470px) {
    height: 80px;
    width: 325px;
  }
`;

export const ContentBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 24px;
  row-gap: 5px;
  font-size: 16px;

  @media screen and (max-width: 820px) {
    padding: 10px;
    font-size: 12px;
    row-gap: 2px;
  }

  @media screen and (max-width: 470px) {
    padding: 20px;
    font-size: 16px;
  }
`;

export const CardHeading = styled.h3`
  font-size: inherit;
  font-weight: 400;
`;

export const CardDescription = styled.p`
  font-size: 24px;
  font-weight: 500;

  @media screen and (max-width: 820px) {
    font-size: 16px;
  }

  @media screen and (max-width: 470px) {
    font-size: 18px;
  }
`;
