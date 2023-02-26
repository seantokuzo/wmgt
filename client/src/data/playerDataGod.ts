import { DataGod } from './dataGod'
// import { CourseAlias, courseData } from './course-data/wmgt-course-data'
// import { allPlayersList, PlayerInterface } from './player-data/AllPlayersList'
import {
  // BadgeRound,
  // PlayerRoundInterface,
  RoundDataInterface,
  RoundIdentifier
} from './round-data/roundTypes'
// import { season1OfficialResults } from './season-data/season1OfficialResults'
// import { season2OfficialResults } from './season-data/season2OfficialResults'
// import { season3OfficialResults } from './season-data/season3OfficialResults'
// import { season4OfficialResults } from './season-data/season4OfficialResults'
// import { season5OfficialResults } from './season-data/season5OfficialResults'
// import { season6OfficialResults } from './season-data/season6OfficialResults'
// import { season7OfficialResults } from './season-data/season7OfficialResults'
// import { season8OfficialResults } from './season-data/season8OfficialResults'
import { season5Data } from './round-data/s5-round-data'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'
import { season8Data } from './round-data/s8-round-data'
// import {
//   PlayerSeasonResultsOfficial,
//   SeasonResultsOfficial
// } from './season-data/seasonResultsTypes'
// import { CURRENT_SEASON } from 'utils/constants'

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
