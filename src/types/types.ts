export const ESelectState = {
  CHARACTER: "character",
  LOCATION: "location",
  EPISODES: "episodes",
} as const;

export type TSectionState = typeof ESelectState[keyof typeof ESelectState];