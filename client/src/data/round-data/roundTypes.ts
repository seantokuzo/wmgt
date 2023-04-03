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
  numWayBelowPar?: number
  numHoleInOne: number
  numBogey: number
  numDoubleBogey: number
  numTripleBogey: number
  numStrokeOut: number
}

type AceScorecard = number | ''

export interface PlayerRoundAces {
  player: string
  easyAcesScorecard: AceScorecard[]
  hardAcesScorecard: AceScorecard[]
}

export interface BadgeRound {
  roundRank: number
  player: string
  easyRoundTotal: number
  hardRoundTotal: number
  seasonPointsEarned: number
  easyRoundScore: number
  hardRoundScore: number
  totalToPar: number
  coconut: boolean
  easyScorecard: string[]
  hardScorecard: string[]
  numPar: number
  numBirdie: number
  numEagle: number
  numAlbatross: number
  numCondor: number
  numWayBelowPar?: number
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

export interface SeasonPointsData {
  roundPoints: number[]
  totalPoints: number
  player: string
  flag: string
}

export interface RoundIdentifier {
  season: number
  round: number
}
