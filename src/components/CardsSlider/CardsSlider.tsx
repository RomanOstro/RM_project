import { ContainerCharacters, HeadingBlock, HeadingTitle } from './cardsSliderStyle';
import { Card } from '../UI/Card/Card';
import { Button } from '../UI/Button/Button';
import { Slider } from '../UI/Slider/Slider';


const data = [
  {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    id: '1'
  },

  {
    name: 'Smith Hello',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    id: '2'
  },

  {
    name: 'Mary',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    id: '3'
  },
  {
    name: 'Mary',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    id: '4'
  },
  {
    name: 'Mary',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    id: '5'
  },
  {
    name: 'Mary',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    id: '6'
  },
  {
    name: 'Mary',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    id: '7'
  },
]


export const CardsSlider = () => {

  return (
    <ContainerCharacters>
      <HeadingBlock>
        <HeadingTitle>Meet the cast</HeadingTitle>
        <Button
          $border='1px solid var(--green)'
          $borderRadius='8px'
          $padding='10px 24px'
        >View All</Button>
      </HeadingBlock>

      <Slider data={data}>
        {(item) => {
          return <Card name={item.name} image={item.image} />
        }}
      </Slider>


    </ContainerCharacters>
  )
}
