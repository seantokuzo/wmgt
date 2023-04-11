import { DataGod } from './dataGod'
import {
  RoundDataInterface,
  RoundIdentifier
} from './round-data/roundTypes'
import { season5Data } from './round-data/s5-round-data'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'
import { season8Data } from './round-data/s8-round-data'

export abstract class PlayerDataGod {
  static getAllData = () => {
    return [...season5Data, ...season6Data, ...season7Data, ...season8Data]
  }

  static getPlayerRoundsPerSeason(player: string) {
    const allRoundData = this.getAllData()
    const allPlayerRounds = allRoundData
      .filter((round) => {
        return round.scores.findIndex((s) => s.player === player) >= 0
      })
      .map((r) => {
        return {
          ...r,
          scores: r.scores.filter((s) => s.player === player)
        }
      })

    return allPlayerRounds
  }

  static getPlayerRoundData(round: RoundIdentifier | '', player: string): RoundDataInterface | [] {
    if (round) {
      const seasonData = DataGod.getSeasonData(round.season)
      const roundData = seasonData.filter((r) => r.round === round.round)[0] || []
      const playerScore = roundData.scores.filter((s) => s.player === player)[0]

      return {
        ...roundData,
        scores: [playerScore]
      }
    }
    return []
  }
}
