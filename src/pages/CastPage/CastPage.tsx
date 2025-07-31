import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getSingleCharacter, multiFatch } from "../../apiHome";
import {
  CardTitle,
  CastDetailsContainer,
  CastImageWrapper,
  CastName,
  ImageBlock,
  ImageCast,
  ImageCastLayout,
  ImageWrapper,
  PageContainer,
  PageContent,
  Separator,
  StatusBarBlock,
  StatusCard,
  CardIcon,
  CardInfo,
  StatusCardLayout,
  CardSubtitle,
  CardDetails,
  CardDetailsLayout,
  EpisodesContainer,
  EpisodesContainerLayout,
  EpisodeList,
  EpisodeListItem,
  EpisodesInfo,
  BgTextWrapper,
  BgText,
} from "./castPagSstyle";
import { Logo } from "../../components/Logo/Logo";
import StatusIcon from "../../assets/icons/heart -icon.png";
import SpeciesIcon from "../../assets/icons/species-icon.png";
import GenderIcon from "../../assets/icons/gender-icon.png";
import OriginIcon from "../../assets/icons/origin-icon.png";
import LastLocationIcon from "../../assets/icons/teleport-icon.png";
import EpisodesIcon from "../../assets/icons/episodes-icon.png";

export const CastPage = () => {
  const { castId } = useParams<{ castId: string }>();

  const { data: dataCharacterSingle } = useQuery({
    queryKey: ["singleCharacter", castId],
    queryFn: (meta) => {
      if (!castId) throw new Error(`id is missing`);
      return getSingleCharacter(Number(castId), meta.signal);
    },
    enabled: !!castId,
  });

  const chsracterEpisodes = dataCharacterSingle?.episode;

  const { data: episodesData } = useQuery({
    queryKey: ["characterEpisodes", chsracterEpisodes],
    queryFn: async () => {
      if (chsracterEpisodes) {
        const data = await multiFatch(chsracterEpisodes);
        return data;
      } else {
        throw new Error("Episodes data error");
      }
    },
    enabled: !!chsracterEpisodes,
  });

  return (
    <PageContainer>
      <Link to="/">
        <Logo $PaddingB={"0px"} $marginB="0px" />
      </Link>
      <PageContent>
        <BgTextWrapper>
          <BgText>{dataCharacterSingle?.name}</BgText>
        </BgTextWrapper>

        <CastImageWrapper>
          <CastName>{dataCharacterSingle?.name}</CastName>
          <ImageBlock>
            <ImageCastLayout />
            <ImageWrapper>
              <ImageCast
                src={dataCharacterSingle?.image}
                alt={`picture ${dataCharacterSingle?.name}`}
              />
            </ImageWrapper>
          </ImageBlock>
        </CastImageWrapper>
        <Separator />
        <CastDetailsContainer>
          <StatusBarBlock>
            <StatusCard>
              <StatusCardLayout />
              <CardInfo>
                <CardIcon src={StatusIcon} />
                <CardTitle>Status</CardTitle>
                <CardSubtitle>{dataCharacterSingle?.status}</CardSubtitle>
              </CardInfo>
            </StatusCard>
            <StatusCard>
              <StatusCardLayout />
              <CardInfo>
                <CardIcon src={SpeciesIcon} />
                <CardTitle>Species</CardTitle>
                <CardSubtitle>{dataCharacterSingle?.species}</CardSubtitle>
              </CardInfo>
            </StatusCard>
            <StatusCard>
              <StatusCardLayout />
              <CardInfo>
                <CardIcon src={GenderIcon} />
                <CardTitle>Gender</CardTitle>
                <CardSubtitle>{dataCharacterSingle?.gender}</CardSubtitle>
              </CardInfo>
            </StatusCard>
          </StatusBarBlock>

          <CardDetails>
            <CardDetailsLayout />
            <CardInfo>
              <CardIcon src={OriginIcon} />
              <CardTitle>Origin</CardTitle>
              <CardSubtitle>{dataCharacterSingle?.origin.name}</CardSubtitle>
            </CardInfo>
          </CardDetails>

          <CardDetails>
            <CardDetailsLayout />
            <CardInfo>
              <CardIcon src={LastLocationIcon} />
              <CardTitle>Origin</CardTitle>
              <CardSubtitle>{dataCharacterSingle?.location.name}</CardSubtitle>
            </CardInfo>
          </CardDetails>

          <EpisodesContainer>
            <EpisodesContainerLayout />
            <EpisodesInfo>
              <CardIcon src={EpisodesIcon} />
              <CardTitle>{`Episodes(S)`}</CardTitle>
              <EpisodeList>
                {episodesData?.map((episode) => {
                  return (
                    <EpisodeListItem key={episode.id}>
                      {episode.name}
                    </EpisodeListItem>
                  );
                })}
              </EpisodeList>
            </EpisodesInfo>
          </EpisodesContainer>
        </CastDetailsContainer>
      </PageContent>
    </PageContainer>
  );
};
