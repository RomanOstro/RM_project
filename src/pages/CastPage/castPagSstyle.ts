import styled from "styled-components";
import BgImage from "../../assets/images/background-castPage.png";
import LayoutImageBox from "../../assets/images/singleCast.svg?react";
import SeparatorImage from "../../assets/svg/separator.svg?react";
import StatusCardLayoutImg from "../../assets/svg/statusCardLayout.svg?react";
import LayoutCardDetails from "../../assets/svg/cardDetailsLayout.svg?react";
import LayoutEpisodes from "../../assets/svg/cardEpisodesLayout.svg?react";
import SmallImageBg from "../../assets/images/header-background.png";
import StarsImageBg from "../../assets/images/bg-stars.png";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${BgImage});
  min-height: 100vh;
  height: auto;
  background-position: center;
  object-fit: cover;
  overflow: hidden;
  padding-bottom: 86px;

  @media screen and (width <= 570px) {
    padding-bottom: 20px;
    background-position-x: 70%;
    object-fit: cover;
    background-image: url(${SmallImageBg});
  }
`;

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 146px 90px 0 180px;
  position: relative;
  width: 1530px;

  &::before {
    content: "";
    position: absolute;
    background: url(${StarsImageBg});
    object-fit: contain;
    width: 90%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (width <= 570px) {
      display: none;
    }
  }

  @media screen and (width <= 1860px) {
    margin: 70px 90px 0 180px;
    width: 1030px;
  }

  @media screen and (width <= 1140px) {
    margin: 70px 0 0 0;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (width <= 570px) {
    margin: 35px 0 0 0;
  }
`;

//---- Стили блока с картинкой
export const CastImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (width <= 1140px) {
    margin-bottom: 15px;
  }
  @media screen and (width <= 570px) {
    margin-bottom: 5px;
  }
`;

export const CastName = styled.h1`
  color: var(--blue);
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;

  @media screen and (width <= 1860px) {
    font-size: 38px;
  }

  @media screen and (width <= 1140px) {
    margin-bottom: 5px;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
`;

export const ImageCastLayout = styled(LayoutImageBox)`
  height: 400px;
  width: 400px;

  @media screen and (width <= 1860px) {
    height: 300px;
    width: 290px;
  }
`;

export const ImageCast = styled.img`
  border-radius: 8px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  height: 300px;
  left: 48px;
  position: absolute;
  top: 52px;
  width: 300px;

  @media (width <= 1860px) {
    height: 220px;
    left: 34px;
    top: 40px;
    width: 224px;
  }
`;

//-------- Декор

export const Separator = styled(SeparatorImage)`
  height: 320px;
  width: 2px;

  @media screen and (width <= 1140px) {
    display: none;
  }
`;

export const BgTextWrapper = styled.div`
  left: -5%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%) rotate(-90deg);
  transform: translate(-50%) rotate(-90deg);

  @media screen and (width <= 1140px) {
    left: 8%;
  }

  @media screen and (width <= 720px) {
    display: none;
  }
`;

export const BgText = styled.p`
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: transparent;
  -webkit-text-fill-color: #191d29;
  background: linear-gradient(45deg, var(--blue), var(--green));
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 100px;
  font-weight: 800;
  opacity: 0.1;
  text-align: center;

  @media screen and (width <= 1860px) {
    font-size: 70px;
  }
`;

//-----castDetails
export const CastDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// --- status Block
export const StatusBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;

/// --- переиспользуемые для Cards
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  padding-inline-start: 32px;
  padding-block-start: 16px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  @media (width <= 1860px) {
    padding-block-start: 14px;
    padding-inline-start: 22px;
    gap: 6px;
  }

  @media (width <= 570px) {
    padding-block-start: 7px;
    padding-inline-start: 14px;
  }
`;

export const CardSubtitle = styled.p<{ $long?: boolean }>`
  font-size: 40px;
  font-weight: 600;
  color: var(--main-color);

  @media (width <= 1860px) {
    font-size: ${($long) => (!$long ? "24px" : "21px")};
  }

  @media screen and (width <= 570px) {
    font-size: ${($long) => (!$long ? "18px" : "13px")};
  }
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: var(--main-color);

  @media (width <= 1860px) {
    font-size: 16px;
  }

  @media screen and (width <= 570px) {
    font-size: 9px;
  }
`;

export const CardIcon = styled.img`
  height: 48px;
  width: 48px;

  @media (width <= 1860px) {
    height: 28px;
    width: 28px;
  }

  @media (width <= 570px) {
    height: 20px;
    width: 20px;
  }
`;

//-- statusCard
export const StatusCard = styled.div`
  height: 174px;
  width: 240px;
  position: relative;

  @media (width <= 1860px) {
    height: 120px;
    width: 166px;
  }

  @media (width <= 570px) {
    height: 76px;
    width: 104px;
  }
`;

export const StatusCardLayout = styled(StatusCardLayoutImg)`
  width: 100%;
  height: 100%;
`;

//----details Card

export const CardDetails = styled(ImageBlock)`
  height: 174px;
  max-width: 800px;

  @media (width <= 1860px) {
    height: 120px;
    max-width: 545px;
  }

  @media screen and (width <= 570px) {
    height: 76px;
    max-width: 351px;
  }
`;

export const CardDetailsLayout = styled(LayoutCardDetails)`
  width: 100%;
  height: 100%;
`;

//----episode Card
export const EpisodesContainer = styled(CardDetails)`
  height: 398px;
  overflow: hidden;
  border-radius: 6px;

  @media (width <= 1860px) {
    height: 280px;
  }

  @media screen and (width <= 570px) {
    height: 185px;
  }
`;

export const EpisodesInfo = styled(CardInfo)`
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--bg-button-gradient), transparent;
    border-radius: 8px;
  }
`;

export const EpisodesContainerLayout = styled(LayoutEpisodes)`
  width: 100%;
  height: 100%;
`;

export const EpisodeList = styled.ul`
  list-style-type: disc;
  padding: 36px 0 30px 62px;

  @media screen and (width <= 570px) {
    padding: 20px 0 30px 30px;
  }
`;

export const EpisodeListItem = styled.li`
  font-size: 40px;
  font-weight: 600;
  margin-top: 8px;

  @media (width <= 1860px) {
    font-size: 24px;
    margin-top: 6px;
  }
`;
