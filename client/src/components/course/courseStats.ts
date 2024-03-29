import { CourseAlias } from 'data/course-data/wmgt-course-data'
import { season6Data } from 'data/round-data/s6-round-data'
import { season7Data } from 'data/round-data/s7-round-data'
import { PlayerRoundInterface, RoundDataInterface } from 'data/round-data/roundTypes'

export default abstract class CourseStats {
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

  private static getRoundFromCourse(data: RoundDataInterface[], course: CourseAlias) {
    return data.filter((round) => round.easyCourse === course || round.hardCourse === course)[0]
  }

  private static getAllScoresForRound(data: RoundDataInterface[], course: CourseAlias) {
    const round = this.getRoundFromCourse(data, course)

    return round.scores.map((score) => this.easyOrHardScorecard(score, course))
  }

  private static getCourseAvgPerRoundHelper(
    data: RoundDataInterface[],
    course: CourseAlias
  ): number[] {
    const allScores = this.getAllScoresForRound(data, course)
    const averageScores = this.getAvgsFromScorecards(allScores)

    return averageScores
  }

  static getCourseAveragesPerRound(season: number, course: CourseAlias): number[] {
    if (season === 7) {
      return this.getCourseAvgPerRoundHelper(season7Data, course)
    }
    return new Array(18).fill('')
  }

  private static getTopTenScores(round: RoundDataInterface, course: CourseAlias) {
    return round.scores
      .filter((score) => score.roundRank <= 10)
      .map((score) => this.easyOrHardScorecard(score, course))
  }

  private static getRoundHoleTopTenAvgHelper(data: RoundDataInterface[], course: CourseAlias) {
    const round = this.getRoundFromCourse(data, course)
    const topTenScores = this.getTopTenScores(round, course)

    return this.getAvgsFromScorecards(topTenScores)
  }

  static getRoundHoleTopTenAvg(season: number, course: CourseAlias): number[] {
    if (season === 7) {
      return this.getRoundHoleTopTenAvgHelper(season7Data, course)
    }
    return new Array(18).fill('')
  }

  private static findLowestScore(round: RoundDataInterface, course: CourseAlias): number {
    if (course[2] === 'E') {
      return round.scores.sort((a, b) => a.easyRoundScore - b.easyRoundScore)[0].easyRoundScore
    }
    return round.scores.sort((a, b) => a.hardRoundScore - b.hardRoundScore)[0].hardRoundScore
  }

  // TODO
  // RETURNS THE SCORE OF THE TOP ROUND
  static getLowestScore(season: number, course: CourseAlias): number | '' {
    if (season === 7) {
      const round = this.getRoundFromCourse(season7Data, course)
      return this.findLowestScore(round, course)
    }

    return ''
  }

  // GETS THE BEST SCORECARD(S) FOR THE ROUND
  private static getBestScores(round: RoundDataInterface, course: CourseAlias): number[][] {
    const lowestScore = this.findLowestScore(round, course)

    let bestScorecards: number[][]
    if (course[2] === 'E') {
      bestScorecards = round.scores
        .filter((score) => score.easyRoundScore === lowestScore)
        .map((score) => score.easyScorecard)
    } else {
      bestScorecards = round.scores
        .filter((score) => score.hardRoundScore === lowestScore)
        .map((score) => score.hardScorecard)
    }

    return bestScorecards
  }

  private static getBestRoundHelper(data: RoundDataInterface[], course: CourseAlias) {
    const round = this.getRoundFromCourse(data, course)
    const bestScores = this.getBestScores(round, course)

    return this.getAvgsFromScorecards(bestScores)
  }

  static getBestRound(season: number, course: CourseAlias): number[] {
    if (season === 7) {
      return this.getBestRoundHelper(season7Data, course)
    }

    return new Array(18).fill('')
  }

  private static countAces(allScores: number[][]): number[] {
    const aceCount = new Array(18).fill('').map((_slot, i) => {
      return allScores.reduce((count, score) => {
        if (score[i] === 1) return count + 1
        return count
      }, 0)
    })
    return aceCount
  }

  private static getNumberOfAcesHelper(data: RoundDataInterface[], course: CourseAlias): number[] {
    const allScores = this.getAllScoresForRound(data, course)

    return this.countAces(allScores)
  }

  static getNumberOfAces(season: number, course: CourseAlias): number[] {
    if (season === 7) {
      return this.getNumberOfAcesHelper(season7Data, course)
    }
    if (season === 6) {
      return this.getNumberOfAcesHelper(season6Data, course)
    }

    return new Array(18).fill('')
  }
}
