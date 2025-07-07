 import type { ICharacter, ICharacterResponse } from "./types/apiTypes"
 
 
 // Общий запрос персонажей 
 export const getCharacters = (page: number = 1):Promise<ICharacter[]> => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((resronse) => resronse.json())
      .then((data:ICharacterResponse ) => data.results)
      .catch(err => {
        throw new Error(`${err.message}`)
      })
  }