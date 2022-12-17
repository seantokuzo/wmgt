import { CourseAlias, courseData } from './course-data/wmgt-course-data'
import { PlayerRoundInterface, RoundDataInterface } from './round-data/roundTypes'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'

type RoundIdentifier = {
  season: number
  round: number
}

export abstract class DataGod {
  // PRIVATE UTIL METHODS * PRIVATE UTIL METHODS * PRIVATE UTIL METHODS
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

  private static getRound(data: RoundDataInterface[], course: CourseAlias) {
    return data.filter((round) => round.easyCourse === course || round.hardCourse === course)[0]
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
  static getRoundNumAcesScorecards(round: RoundIdentifier): {
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

  static getRoundTopTenAvg(season: number, course: CourseAlias): number[] {
    const round = this.getRound(this.getSeasonData(season), course)
    const topTenScores = this.getTopTenScores(round, course)

    return this.getAvgsFromScorecards(topTenScores)
  }

  // FULL FIELD AVERAGES * FULL FIELD AVERAGES * FULL FIELD AVERAGES
  private static getAllScoresForRound(data: RoundDataInterface[], course: CourseAlias) {
    const round = this.getRound(data, course)

    return round.scores.map((score) => this.easyOrHardScorecard(score, course))
  }

  static getRoundHoleAverages(season: number, course: CourseAlias): number[] {
    const allScores = this.getAllScoresForRound(this.getSeasonData(season), course)
    const averageScores = this.getAvgsFromScorecards(allScores)

    return averageScores
  }
}
