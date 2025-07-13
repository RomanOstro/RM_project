import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getSingleCharacter } from "../../apiHome"



export const CastPage = () => {
  const { castId } = useParams<{castId: string}>()

  const { data } = useQuery({
    queryKey: ['singleCharacter', castId],
    queryFn: (meta) => {
      if(!castId) throw new Error(`id is missing`)
       return getSingleCharacter(Number(castId), meta.signal)
    },
    enabled: !!castId
  })

  
  return (

    <>
      <p>Карточка с id = {data?.id}</p>
    </>
  )
}