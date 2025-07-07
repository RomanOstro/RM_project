import { useQuery } from '@tanstack/react-query'
import { Slider } from '../UI/Slider/Slider'
import { getEpisodes, getLocation } from '../../apiHome'
import { useState } from 'react'
import { TextCard } from '../UI/TextCard/TextCard'
import { ListTitle, SliderList, SlidersContainer } from './slidersHomeStyles'


export const SlidersHome = () => {
  const [pageEpisodes] = useState<number>(1)
  const [pageLocation] = useState<number>(2)

  const { data: episodeData } = useQuery({
    queryKey: ['episodes', pageEpisodes],
    queryFn: () => getEpisodes(pageEpisodes)
  })

  const { data: locationsData } = useQuery({
    queryKey: ['locations', pageLocation],
    queryFn: () => getLocation(pageLocation)
  })

  console.log(locationsData)

  return (
    <SlidersContainer>

      <SliderList>
        <ListTitle>Episodes</ListTitle>
        {episodeData && <Slider data={episodeData} slidesPerView={3}>
          {(episode) => <TextCard title={episode.episode} description={episode.name} />}
        </Slider>}
      </SliderList>

      <SliderList>
        <ListTitle>Locations</ListTitle>
        {locationsData && <Slider data={locationsData} slidesPerView={3}>
          {(location) => <TextCard title={`#${location.id}`} description={location.dimension}></TextCard>}
        </Slider>}
      </SliderList>

    </SlidersContainer>
  )
}