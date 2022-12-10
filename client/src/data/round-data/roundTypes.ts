import { CourseAlias } from 'data/course-data/wmgt-course-data'

export interface PlayerRoundInterface {
  roundRank: number
  player: string
  easyRoundTotal: number
  hardRoundTotal: number
  seasonPointsEarned: number
  easyRoundScore: number
  hardRoundScore: number
  totalToPar: number
  coconut: boolean
  easyScorecard: number[]
  hardScorecard: number[]
  numPar: number
  numBirdie: number
  numEagle: number
  numAlbatross: number
  numCondor: number
  numHoleInOne: number
  numBogey: number
  numDoubleBogey: number
  numTripleBogey: number
  numStrokeOut: number
}

export interface RoundDataInterface {
  season: number
  round: number
  easyCourse: CourseAlias
  hardCourse: CourseAlias
  scores: PlayerRoundInterface[] | []
}
