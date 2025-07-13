import { useQuery } from '@tanstack/react-query'
import { Slider } from '../UI/Slider/Slider'
import { getEpisodes, getLocation } from '../../apiHome'
import { TextCard } from '../UI/TextCard/TextCard'
import { ListTitle, SliderList, SlidersContainer } from './slidersHomeStyles'



export const SlidersHome = () => {


  const { data: episodeData } = useQuery({
    queryKey: ['episodes'],
    queryFn: (meta) => getEpisodes({ signal: meta.signal })
  })

  const { data: locationsData } = useQuery({
    queryKey: ['locations'],
    queryFn: (meta) => getLocation({ signal: meta.signal })
  })

  return (
    <SlidersContainer>

      <SliderList>
        <ListTitle>Episodes</ListTitle>
        {episodeData && <Slider data={episodeData.results} slidesPerView={3}>
          {(episode) => <TextCard title={episode.episode} description={episode.name} />}
        </Slider>}
      </SliderList>

      <SliderList>
        <ListTitle>Locations</ListTitle>
        {locationsData && <Slider data={locationsData.results} slidesPerView={3}>
          {(location) => <TextCard title={`#${location.id}`} description={location.dimension}></TextCard>}
        </Slider>}
      </SliderList>

    </SlidersContainer>
  )
}