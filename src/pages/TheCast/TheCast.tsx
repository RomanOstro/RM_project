import { getCharacters } from "../../apiHome"
import { useQuery } from '@tanstack/react-query';
import { Content, MissingSection } from "./theCastStyle"
import { Card } from "../../components/UI/Card/Card";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const TheCast = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || ''
  const currentPage = Number(searchParams.get('page')) || 1



  const { data, isPending, error } = useQuery({
    queryKey: ['getCharacter', name, currentPage],
    queryFn: (meta) => getCharacters({ page: currentPage, name, signal: meta.signal }),
  })

  return (
    <>
      {isPending && <MissingSection><p>Loading...</p></MissingSection>}

      {data?.results &&
        <Content>
          {data?.results?.map((charecter) => {
            return <Link key={charecter.id} to={{ pathname: `/cast/${charecter.id}` }}>
              <Card image={charecter.image!} name={charecter.name!} />
            </Link>
          })}
        </Content>}
      {error &&
        <MissingSection><p>Ничего не найдено</p></MissingSection>
      }
      <Pagination totalPage={data?.info?.pages || 1} />



    </>
  )
}