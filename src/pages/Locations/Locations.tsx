import { useQuery } from "@tanstack/react-query"
import { Content, MissingSection } from "./locationsStyle"
import { getLocation } from "../../apiHome"
import { useSearchParams } from "react-router-dom"
import { TextCard } from "../../components/UI/TextCard/TextCard"
import { Pagination } from "../../components/Pagination/Pagination"




export const Locations = () => {
  const [searchParam] = useSearchParams()
  const name = searchParam.get('name') || '';
  const page = Number(searchParam.get('page')) || 1;

  const { data: locationsData, isPending } = useQuery({
    queryKey: ['locations', name, page],
    queryFn: (meta) => getLocation({ signal: meta.signal, name, page })
  })


  return (
    <>
      <Content>
        {locationsData?.results && locationsData?.results?.map((location) => {
          return <TextCard key={location.id} title={location.name} description={location.dimension} />
        })}
      </Content>
      {isPending && <MissingSection><p>Loading...</p></MissingSection>}
      <Pagination totalPage={locationsData?.info.pages || 1} />
    </>
  )
}