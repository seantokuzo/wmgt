export interface PlayerSeasonResultsOfficial {
  player: string
  seasonRank: number
  seasonPoints: number
  pointsByRound: number[]
  flagLink?: string
}

export interface SeasonResultsOfficial {
  season: number
  results: PlayerSeasonResultsOfficial[]
}
