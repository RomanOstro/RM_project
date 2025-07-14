import styled from "styled-components";
import BgImage from "../../assets/images/background-castPage.png";
import LayoutImageBox from "../../assets/images/singleCast.svg?react";
import SeparatorImage from "../../assets/svg/separator.svg?react";
import StatusCardLayoutImg from "../../assets/svg/statusCardLayout.svg?react";
import LayoutCardDetails from "../../assets/svg/cardDetailsLayout.svg?react";
import LayoutEpisodes from "../../assets/svg/cardEpisodesLayout.svg?react";

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
`;

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 146px 90px 0 180px;
  position: relative;
  min-width: 1530px;
`;

//---- Стили блока с картинкой
export const CastImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CastName = styled.h1`
  color: var(--blue);
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
`;

export const ImageBlock = styled.div`
  position: relative;
`;

export const ImageCastLayout = styled(LayoutImageBox)`
  height: 400px;
  width: 400px;
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
`;

//--------

export const Separator = styled(SeparatorImage)`
  height: 320px;
  width: 2px;
`;

//-----castDetails
export const CastDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
`;

export const CardSubtitle = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: var(--main-color);
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: var(--main-color);
`;

export const CardIcon = styled.img`
  height: 48px;
  width: 48px;
`;

//-- statusCard
export const StatusCard = styled.div`
  height: 174px;
  width: 240px;
  position: relative;
`;

export const StatusCardLayout = styled(StatusCardLayoutImg)`
  width: 100%;
  height: 100%;
`;

//----details Card

export const CardDetails = styled(ImageBlock)`
  height: 174px;
  max-width: 800px;
`;

export const CardDetailsLayout = styled(LayoutCardDetails)`
  width: 100%;
  height: 100%;
`;

//----episode Card
export const EpisodesContainer = styled(CardDetails)`
  height: 408px;
  overflow: hidden;
  border-radius: 6px;
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
`;

export const EpisodeListItem = styled.li`
  font-size: 40px;
  font-weight: 600;
  margin-top: 8px;
`;
