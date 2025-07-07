import { CardContainer, CardLayout, ContentBox, CardHeading, CardDescription } from "./textCardStyle"

interface ITextCardProps {
  title: string;
  description: string;
}
export const TextCard = (props: ITextCardProps) => {
  const { title, description } = props;

  return (
    <CardContainer>
      <CardLayout />

      <ContentBox>
        <CardHeading>{title}</CardHeading>
        <CardDescription>{description}</CardDescription>
      </ContentBox>

    </CardContainer>
  )
}