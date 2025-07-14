import type {
  ICharacter,
  IEpisode,
  ILocation,
  IResponse,
  ISingleCharacter,
} from "./types/apiTypes";

const BASE_URL = "https://rickandmortyapi.com/api";

interface IGetParams {
  signal: AbortSignal;
  page?: number;
  name?: string;
}

// Общий запрос персонажей
export const getCharacters = (
  props: IGetParams
): Promise<IResponse<ICharacter>> => {
  const { signal, page, name } = props;
  const url = new URL(`${BASE_URL}/character`);
  if (name) {
    url.searchParams.set("name", name);
  } else if (page !== undefined) {
    url.searchParams.set("page", page.toString());
  }
  return fetch(url, { signal })
    .then((res) => res.json())
    .catch((err) => new Error(`data not found ${err}`));
};

//Запрос информации на 1 персонажа
export const getSingleCharacter = (
  id: number,
  signal: AbortSignal
): Promise<ISingleCharacter> => {
  return fetch(`${BASE_URL}/character/${id}`, { signal }).then((resronse) =>
    resronse.json()
  );
};

// запрос Episodes
export const getEpisodes = async (
  props: IGetParams
): Promise<IResponse<IEpisode>> => {
  const { page, name, signal } = props;
  const url = new URL(`${BASE_URL}/episode`);
  if (name) {
    url.searchParams.set("name", name);
  } else if (page !== undefined) {
    url.searchParams.set("page", page.toString());
  }

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`response error: ${res.status}`);
  return res.json();
};

// запрос Location
export const getLocation = async (
  props: IGetParams
): Promise<IResponse<ILocation>> => {
  const { page, name, signal } = props;
  const url = new URL(`${BASE_URL}/location`);
  if (name) {
    url.searchParams.set("name", name);
  } else if (page !== undefined) {
    url.searchParams.set("page", page.toString());
  }

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`response error: ${res.status}`);
  return res.json();
};

//promise.all - использую для запросов эпизодов

export const multiFatch = async (urls: string[]): Promise<IEpisode[]> => {
  const response = await Promise.all(urls.map((url) => fetch(url)));
  return Promise.all(response.map((response) => response.json()));
};
