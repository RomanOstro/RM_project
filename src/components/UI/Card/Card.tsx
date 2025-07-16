import { CardContainer, CardContent, CardImage, CardTitle, ImageBlock, LayautCard } from "./cardStyle"
interface TCard {
  image: string;
  name: string;
  adaptive?: boolean;
}
export const Card = (props: TCard) => {

  const { name, image, adaptive } = props;

  return (
    <CardContainer $adaptive={adaptive}>
      <LayautCard />
      <CardContent $adaptive={adaptive}>
        <ImageBlock $adaptive={adaptive}>
          <CardImage src={image} alt={name} />
        </ImageBlock>

        <CardTitle $adaptive={adaptive}>{name}</CardTitle>
      </CardContent>
    </CardContainer>
  )
}