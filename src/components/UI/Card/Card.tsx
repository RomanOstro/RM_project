import { CardContainer, CardImage, CardTitle, ImageBlock, LayautCard } from "./cardStyle"
interface TCard {
  image: string;
  name: string;
}
export const Card = (props: TCard) => {

  const { name, image } = props;

  return (
    <CardContainer>
      <LayautCard />
      <ImageBlock>
        <CardImage src={image} alt={name} />
      </ImageBlock>

      <CardTitle>{name}</CardTitle>

    </CardContainer>
  )
}