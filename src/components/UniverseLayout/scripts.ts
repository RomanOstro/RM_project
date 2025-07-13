import { ESelectState, type TSectionState } from "../../types/types";

// Объединяем title и стейт select в объект, будем получать значение по location.pathname
export const pathToSection: Record<
  string,
  { state: string; select: TSectionState }
> = {
  "/cast": { state: "The Cast", select: ESelectState.CHARACTER },
  "/location": { state: "Location", select: ESelectState.LOCATION },
  "/episodes": { state: "Episodes", select: ESelectState.EPISODES },
};
