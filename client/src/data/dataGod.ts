import { RoundDetailsMode } from 'context/season/seasonContext'
import { CourseAlias, courseData } from './course-data/wmgt-course-data'
import { allPlayersList, flagConverter, PlayerInterface } from './player-data/AllPlayersList'
import { PlayerRoundInterface, RoundDataInterface } from './round-data/roundTypes'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'

type RoundIdentifier = {
  season: number
  round: number
}

export abstract class DataGod {
  // PRIVATE UTIL METHODS * PRIVATE UTIL METHODS * PRIVATE UTIL METHODS
  private static getPlayerFlag(link: string) {
    return flagConverter.filter((f) => f.link === link).length > 0
      ? flagConverter.filter((f) => f.link === link)[0].flag
      : ''
  }

  private static getSeasonData(season: number) {
    switch (season) {
      case 7:
        return season7Data
      case 6:
        return season6Data
      default:
        return season7Data
    }
  }

  private static getRoundFromCourse(seasonData: RoundDataInterface[], course: CourseAlias) {
    return seasonData.filter(
      (round) => round.easyCourse === course || round.hardCourse === course
    )[0]
  }

  private static getRoundFromSeason(round: { season: number; round: number }) {
    if (round.season === 6) {
      return season6Data.filter((r) => r.round === round.round)[0]
    }
    return season7Data.filter((r) => r.round === round.round)[0]
  }

  private static getRoundFromRoundNum(seasonData: RoundDataInterface[], round: number) {
    return seasonData.filter((r) => r.round === round)[0]
  }

  private static easyOrHardScorecard(score: PlayerRoundInterface, course: CourseAlias) {
    return course[2] === 'E' ? score.easyScorecard : score.hardScorecard
  }

  private static getAvgsFromScorecards(scorecardArray: number[][]) {
    return new Array(18).fill('').map((_slot, i) => {
      return (
        Math.round(
          (10 *
            scorecardArray.reduce((sum, scorecard) => {
              return scorecard[i] + sum
            }, 0)) /
            scorecardArray.length
        ) / 10
      )
    })
  }

  static getCoursePars(course: CourseAlias) {
    return courseData.filter((c) => c.alias === course)[0].parByHole
  }

  // COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS
  static getCoconutRounds(round: RoundIdentifier) {
    const seasonData = this.getSeasonData(round.season)
    if (typeof seasonData === 'string') return 'No data for that season'
    const roundData = seasonData.filter((r) => r.round === round.round)[0]
    const coconutScores = roundData.scores.filter((score) => {
      return (
        score.easyScorecard.every((s, i) => s <= this.getCoursePars(roundData.easyCourse)[i]) &&
        score.hardScorecard.every((s, i) => s <= this.getCoursePars(roundData.hardCourse)[i])
      )
    })
    const stevenTally = roundData.scores.filter((s) => s.coconut)
    if (
      !coconutScores.every((s) => stevenTally.some((player) => player.player === s.player)) &&
      stevenTally.every((s) => coconutScores.some((player) => player.player === s.player))
    ) {
      throw new Error("Steven's cocnuts don't match with DataGod's")
    }
    return {
      ...roundData,
      scores: coconutScores
    }
  }

  // ACES * ACES * ACES * ACES * ACES * ACES * ACES * ACES * ACES * ACES
  static getRoundAcesPerHole(round: RoundIdentifier): {
    easyCourseNumAces: number[]
    hardCourseNumAces: number[]
  } {
    const seasonData = this.getSeasonData(round.season)
    const roundData = seasonData.filter((r) => r.round === round.round)[0]
    const easyScores = roundData.scores.map((s) => s.easyScorecard)
    const hardScores = roundData.scores.map((s) => s.hardScorecard)
    const easyCourseNumAces = new Array(18).fill('').map((_slot, i) => {
      return easyScores.reduce((count, score) => {
        if (score[i] === 1) return count + 1
        return count
      }, 0)
    })
    const hardCourseNumAces = new Array(18).fill('').map((_slot, i) => {
      return hardScores.reduce((count, score) => {
        if (score[i] === 1) return count + 1
        return count
      }, 0)
    })

    return { easyCourseNumAces, hardCourseNumAces }
  }

  // TOP 10 * TOP 10 * TOP 10 * TOP 10 * TOP 10 * TOP 10 * TOP 10
  static getTopTenScores(round: RoundDataInterface, course: CourseAlias) {
    return round.scores
      .filter((score) => score.roundRank <= 10)
      .map((score) => this.easyOrHardScorecard(score, course))
  }

  static getRoundHoleTopTenAvg(season: number, course: CourseAlias): number[] {
    const round = this.getRoundFromCourse(this.getSeasonData(season), course)
    const topTenScores = this.getTopTenScores(round, course)

    return this.getAvgsFromScorecards(topTenScores)
  }

  // FULL FIELD AVERAGES * FULL FIELD AVERAGES * FULL FIELD AVERAGES
  private static getAllScoresForRound(data: RoundDataInterface[], course: CourseAlias) {
    const round = this.getRoundFromCourse(data, course)

    return round.scores.map((score) => this.easyOrHardScorecard(score, course))
  }

  static getRoundHoleAverage(season: number, course: CourseAlias): number[] {
    const allScores = this.getAllScoresForRound(this.getSeasonData(season), course)
    const averageScores = this.getAvgsFromScorecards(allScores)

    return averageScores
  }

  static getPlayerScorecard(
    type: 'map' | 'hover' | 'decoration',
    scorecard: number[],
    coursePars: number[],
    playerRound: PlayerRoundInterface,
    roundDetailsMode: RoundDetailsMode,
    windowWidth: number,
    showEasyCourse: boolean,
    showScoreTracker: boolean,
    showFrontNine: boolean
  ): number[] {
    const holeScores = scorecard.map((score, i) => score - coursePars[i])
    const startingCount =
      showEasyCourse || roundDetailsMode === 'hard' ? 0 : playerRound.easyRoundScore
    const scoreTracker = holeScores.map((score, i) => {
      return holeScores.slice(0, i + 1).reduce((sum, curr) => sum + curr, startingCount)
    })
    if (type === 'map') {
      const scoreToMapFull = showScoreTracker ? scoreTracker : scorecard
      const scoreToMapNine = showFrontNine ? scoreToMapFull.slice(0, 9) : scoreToMapFull.slice(9)
      return windowWidth > 768 ? scoreToMapFull : scoreToMapNine
    }
    if (type === 'hover') {
      const otherScoreFull = !showScoreTracker ? scoreTracker : scorecard
      const otherScoreNine = showFrontNine ? otherScoreFull.slice(0, 9) : otherScoreFull.slice(9)
      return windowWidth > 768 ? otherScoreFull : otherScoreNine
    }
    const holeScoresNine = showFrontNine ? holeScores.slice(0, 9) : holeScores.slice(9)
    return windowWidth > 768 ? holeScores : holeScoresNine
  }

  static getLowestRoundHoleScores(season: number, roundNum: number) {
    const seasonData = this.getSeasonData(season)
    const round = this.getRoundFromRoundNum(seasonData, roundNum)
    const lowestEasyHoleScores = new Array(18).fill('').map((_slot, i) => {
      const holeScores: number[] = round.scores.map((score) => score.easyScorecard[i])
      return Math.min(...holeScores)
    })
    // const easyHoleLowScoreCount =
    const lowestHardHoleScores = new Array(18).fill('').map((_slot, i) => {
      const holeScores: number[] = round.scores.map((score) => score.hardScorecard[i])
      return Math.min(...holeScores)
    })
    // const hardHoleLowScoreCount
    return { lowestEasyHoleScores, lowestHardHoleScores }
  }

  static getCourseLeaderboard(scores: PlayerRoundInterface[], course: 'easy' | 'hard') {
    if (course === 'easy') return scores.sort((a, b) => a.easyRoundScore - b.easyRoundScore)
    return scores.sort((a, b) => a.hardRoundScore - b.hardRoundScore)
  }

  static getRoundPodium(round: { season: number; round: number }): {
    gold: PlayerInterface[]
    silver: PlayerInterface[]
    bronze: PlayerInterface[]
  } {
    const roundObject = this.getRoundFromSeason(round)

    const goldMembers = roundObject.scores.filter((score) => score.roundRank === 1)
    const silverMembers = roundObject.scores.filter((score) => score.roundRank === 2)
    const bronzeMembers = roundObject.scores.filter((score) => score.roundRank === 3)
    const getFinishers = (members: [] | PlayerRoundInterface[]) => {
      return members.length === 0
        ? []
        : members
            .map((s) => allPlayersList.filter((p) => p.player === s.player)[0])
            .map((player) => {
              return {
                player: player.player,
                flag: this.getPlayerFlag(player.flag)
              }
            })
    }
    const gold = getFinishers(goldMembers)
    const silver = getFinishers(silverMembers)
    const bronze = getFinishers(bronzeMembers)

    return { gold, silver, bronze }
  }

  // static convertPlayerRoundsToAcesOnly(round: RoundDataInterface) {
  //   return round.scores.map((score) => {
  //     return {
  //       ...score,
  //       easyScorecard: score.easyScorecard.map((s) => (s === 1 ? s : '')),
  //       hardScorecard: score.easyScorecard.map((s) => (s === 1 ? s : ''))
  //     }
  //   })
  // }
}
