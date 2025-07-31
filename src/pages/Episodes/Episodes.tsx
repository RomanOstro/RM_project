import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../../apiHome";
import { TextCard } from "../../components/UI/TextCard/TextCard";
import { useSearchParams } from "react-router-dom";
import { EpisodesContent, MissingSection } from "./episodesStyle";
import { Pagination } from "../../components/Pagination/Pagination";

export const Episodes = () => {
  const [searchParam] = useSearchParams();
  const name = searchParam.get("name") || "";
  const page = Number(searchParam.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["episodes", name, page],
    queryFn: (meta) =>
      getEpisodes({
        signal: meta.signal,
        name,
        page,
      }),
  });

  return (
    <>
      <EpisodesContent>
        {data &&
          data?.results.map((episode) => {
            return (
              <TextCard
                $isAdaptive={true}
                key={episode.id}
                title={`#${episode.id}`}
                description={episode.name}
              />
            );
          })}
      </EpisodesContent>
      {isPending && (
        <MissingSection>
          <p>Loading...</p>
        </MissingSection>
      )}
      <Pagination totalPage={data?.info.pages || 1} />
    </>
  );
};
