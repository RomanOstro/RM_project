import { useQuery } from '@tanstack/react-query'
import { Slider } from '../UI/Slider/Slider'
import { getEpisodes, getLocation } from '../../shared/api/apiHome'
import { TextCard } from '../UI/TextCard/TextCard'
import { ListTitle, SliderList, SlidersContainer, SlidersHomeBreakpoints } from './slidersHomeStyles'



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
        {episodeData && <Slider $breakpoints={SlidersHomeBreakpoints} $name={'episode'} data={episodeData.results} slidesPerView={4}>
          {(episode) => <TextCard title={episode.episode} description={episode.name} />}
        </Slider>}
      </SliderList>

      <SliderList>
        <ListTitle>Locations</ListTitle>
        {locationsData && <Slider $breakpoints={SlidersHomeBreakpoints} $name={'location'} data={locationsData.results} slidesPerView={4}>
          {(location) => <TextCard title={`#${location.id}`} description={location.dimension}></TextCard>}
        </Slider>}
      </SliderList>

    </SlidersContainer>
  )
}