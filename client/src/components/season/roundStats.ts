import { courseData, CourseAlias } from '../../data/course-data/wmgt-course-data'
import {
  PlayerRoundInterface,
  RoundDataInterface,
  season7Data
} from '../../data/round-data/s7-round-data'

export default abstract class RoundStats {
  static getPlayerScoreTracking(scorecard: number[], courseAlias: CourseAlias) {
    const course = courseData.filter((c) => c.alias === courseAlias)[0]
    const holeScores = scorecard.map((score, i) => course.parByHole[i] - score)
    console.log(holeScores)

    const scoreTracking = holeScores.map((score, i) => {
      holeScores.slice(0, i + 1).reduce((sum, curr) => sum + curr, 0)
    })
    console.log(scoreTracking)
  }
}
