import type {
  ICharacter,
  IEpisode,
  ILocation,
  IResponse,
} from "./types/apiTypes";

const BASE_URL = "https://rickandmortyapi.com/api";

// Общий запрос персонажей
export const getCharacters = (page: number = 1): Promise<ICharacter[]> => {
  return fetch(`${BASE_URL}/character/?page=${page}`)
    .then((resronse) => resronse.json())
    .then((data: IResponse<ICharacter>) => data.results)
    .catch((err) => {
      throw new Error(`${err.message}`);
    });
};

// запрос Episodes
export const getEpisodes = (page: number = 1): Promise<IEpisode[]> => {
  return fetch(`${BASE_URL}/episode/?page=${page}`)
    .then((res) => res.json())
    .then((data: IResponse<IEpisode>) => data.results)
    .catch((err) => {
      throw new Error(`${err.message}`);
    });
};

// запрос Location
export const getLocation = (page: number = 1): Promise<ILocation[]> => {
  return fetch(`${BASE_URL}/location/?page=${page}`)
    .then((res) => res.json())
    .then((data: IResponse<ILocation>) => data.results)
    .catch((err) => {
      throw new Error(`${err.message}`);
    });
};
