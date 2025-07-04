import { CardContainer, CardImage, CardTitle, ImageBlock, LayautCard } from "./cardStyle"

interface TCard {
  image: string;
  name: string;
}
export const Card = (props: TCard) => {

  return (
    <CardContainer>
      <LayautCard />
      <ImageBlock>
        <CardImage src={`${props.image}`} />
      </ImageBlock>

      <CardTitle>{props.name}</CardTitle>

    </CardContainer>
  )
}