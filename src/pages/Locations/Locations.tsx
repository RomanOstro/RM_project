import { useQuery } from "@tanstack/react-query"
import { Content, MissingSection } from "./locationsStyle"
import { getLocation } from "../../apiHome"
import { useSearchParams } from "react-router-dom"
import { TextCard } from "../../components/UI/TextCard/TextCard"




export const Locations = () => {
  const [searchParam] = useSearchParams()
  const name = searchParam.get('name') || '';

  const { data: locationsData, isPending } = useQuery({
    queryKey: ['locations', name],
    queryFn: (meta) => getLocation({ signal: meta.signal, name })
  })


  return (

    <Content>
      {locationsData?.results && locationsData?.results?.map((location) => {
        return <TextCard key={location.id} title={location.name} description={location.dimension} />
      })}

      {isPending && <MissingSection><p>Loading...</p></MissingSection>}
    </Content>
  )
}