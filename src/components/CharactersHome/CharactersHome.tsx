import { ContainerCharacters, HeadingBlock, HeadingTitle } from './cardsSliderStyle';
import { Card } from '../UI/Card/Card';
import { Button } from '../UI/Button/Button';
import { Slider } from '../UI/Slider/Slider';
import UnknowgImage from '../../assets/images/card-image-unknown.jpeg'
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../../apiHome';
import { useState } from 'react';



export const CharactersHome = () => {
  const [page] = useState<number>(1)


  const { data, error, isPending } = useQuery({
    queryKey: ['getCharacter', page],
    queryFn: () => getCharacters(page),
  })

  if (isPending) {
    return <h1 style={{ fontSize: '40px', textAlign: 'center', paddingBlockStart: '100px' }}>Loading...</h1>
  }

  if (error) {
    return <h1 style={{ fontSize: '40px' }}>{error.message}</h1>
  }

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

      {data && <Slider data={data}>
        {(item) => {
          return <Card
            name={item.name ? item.name : ''}
            image={item.image ? item.image : UnknowgImage}
          />
        }}
      </Slider>}
    </ContainerCharacters>
  )
}




// const data = [
//   {
//     name: 'Morty Smith',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     id: '1'
//   },

//   {
//     name: 'Smith Hello',
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     id: '2'
//   },

//   {
//     name: 'Mary',
//     image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     id: '3'
//   },
//   {
//     name: 'Mary',
//     image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     id: '4'
//   },
//   {
//     name: 'Mary',
//     image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     id: '5'
//   },
//   {
//     name: 'Mary',
//     image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     id: '6'
//   },
//   {
//     name: 'Mary',
//     image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     id: '7'
//   },
// ]