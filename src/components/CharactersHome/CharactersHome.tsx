import { ButtonViewAll, ContainerCharacters, HeadingBlock, HeadingTitle, sliderCharacterBreakpoints } from './charactersHomeStyle';
import { Card } from '../UI/Card/Card';
import { Slider } from '../UI/Slider/Slider';
import UnknowgImage from '../../assets/images/card-image-unknown.jpeg'
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../../apiHome';
import { Link } from 'react-router-dom';



export const CharactersHome = () => {

  const { data, error, isPending } = useQuery({
    queryKey: ['getCharacter'],
    queryFn: (meta) => getCharacters({ signal: meta.signal }),
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
        <Link to={'/cast'}>
          <ButtonViewAll
            $border='1px solid var(--green)'
            $borderRadius='8px'
            $padding='10px 24px'
          >View All</ButtonViewAll>
        </Link>
      </HeadingBlock>

      {data && <Slider $breakpoints={sliderCharacterBreakpoints} $name={'Character'} data={data.results} >
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