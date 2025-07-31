import { CardContainer, CardLayout, ContentBox, CardHeading, CardDescription } from "./textCardStyle"

interface ITextCardProps {
  title: string;
  description: string;
  $isAdaptive?: boolean;
}
export const TextCard = (props: ITextCardProps) => {
  const { title, description , $isAdaptive} = props;

  return (
    <CardContainer >
      <CardLayout $isAdaptive={$isAdaptive} />

      <ContentBox $isAdaptive={$isAdaptive}>
        <CardHeading>{title}</CardHeading>
        <CardDescription $isAdaptive={$isAdaptive}>{description}</CardDescription>
      </ContentBox>

    </CardContainer>
  )
}