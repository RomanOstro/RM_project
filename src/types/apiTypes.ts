interface IApiInfo {
  count?: number;
  next?: string | null;
  pages?: number;
  prev?: string | null;
}

export interface ICharacterLocatyon {
  name: string;
  url: string;
}

export interface ICharacterOrigin {
  name: string;
  url: string;
}

export interface ICharacter {
  created?: string;
  episode?: string[];
  gender?: "unknown" | "Female" | "Male" | "Genderless";
  id?: number;
  image?: string;
  location?: ICharacterLocatyon;
  name?: string;
  origin?: ICharacterOrigin;
  species?: string;
  status?: "Dead" | "Alive" | "unknown";
  type?: string;
  url?: string;
}

//Универсальный тип запроса
export interface IResponse<T> {
  info: IApiInfo;
  results: T[];
}

// Episode
export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

//Location
export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
