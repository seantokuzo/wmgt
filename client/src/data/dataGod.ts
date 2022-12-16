import { CourseAlias, courseData } from './course-data/wmgt-course-data'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'

type RoundIdentifier =
  | {
      season: 6
      round: 4 | 12
    }
  | {
      season: 7
      round: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    }

export abstract class DataGod {
  static getSeasonData(season: 7 | 6) {
    switch (season) {
      case 7:
        return season7Data
      case 6:
        return season6Data
      default:
        return 'No data for that season'
    }
  }

  static getCoursePars(course: CourseAlias) {
    return courseData.filter((c) => c.alias === course)[0].parByHole
  }

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

  static getRoundNumAcesScorecards(round: RoundIdentifier):
    | {
        easyCourseNumAces: number[]
        hardCourseNumAces: number[]
      }
    | 'No data for that season' {
    const seasonData = this.getSeasonData(round.season)
    if (typeof seasonData === 'string') return 'No data for that season'
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
}
