import { getCharacters } from "../../apiHome"
import { useQuery } from '@tanstack/react-query';
import { Content, MissingSection } from "./theCastStyle"
import { useState } from "react";
import { Card } from "../../components/UI/Card/Card";
import { Link, useSearchParams } from "react-router-dom";

export const TheCast = () => {
  const [page, setCurrentPage] = useState<number>(1)
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || ''

  const { data, isPending, isError } = useQuery({
    queryKey: ['getCharacter', name, page],
    queryFn: (meta) => getCharacters({ page, name, signal: meta.signal }),
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

      {isError &&
        <MissingSection><p>Ничего не найдено</p></MissingSection>
      }

    </>
  )
}