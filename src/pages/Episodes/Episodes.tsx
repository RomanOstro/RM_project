import { useQuery } from "@tanstack/react-query"
import { getEpisodes } from "../../apiHome"
import { TextCard } from "../../components/UI/TextCard/TextCard"
import { useSearchParams } from "react-router-dom"
import { Content, MissingSection } from "./episodesStyle"


export const Episodes = () => {
  const [searchParam] = useSearchParams();
  const name = searchParam.get('name') || '';

  const { data, isPending } = useQuery({
    queryKey: ['episodes', name],
    queryFn: (meta) => getEpisodes({
      signal: meta.signal,
      name
    })
  })

  console.log(data?.results)

  return (
    <Content>
      {data && data?.results.map((episode) => {
        return <TextCard key={episode.id} title={`#${episode.id}`} description={episode.name} />
      })}

      {isPending && <MissingSection><p>Loading...</p></MissingSection>}
    </Content>
  )
}