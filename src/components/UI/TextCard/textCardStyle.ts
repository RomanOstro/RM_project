import styled from "styled-components";
import LayoutCard from "../../../assets/images/text-card-layout.svg?react";

export const CardContainer = styled.article`
  margin-block: 20px;
  position: relative;
`;
export const CardLayout = styled(LayoutCard)`
  height: 96px;
  width: 360px;
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
`;

export const CardHeading = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

export const CardDescription = styled.p`
  padding-top: 5px;
  font-size: 24px;
  font-weight: 500;
`;
