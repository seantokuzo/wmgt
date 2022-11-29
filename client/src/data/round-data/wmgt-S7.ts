import { CourseAlias } from 'data/course-data/wmgt-course-data'

export interface PlayerRoundInterface {
  roundRank: string
  player: string
  easyRoundTotal: string
  hardRoundTotal: string
  seasonPointsEarned: string
  easyRoundScore: string
  hardRoundScore: string
  totalToPar: string
  coconut: boolean
  easyScorecard: string[]
  hardScorecard: string[]
  numPar: string
  numBirdie: string
  numEagle: string
  numAblatross: string
  numCondor: string
  numHoleInOne: string
  numBogey: string
  numDoubleBogey: string
  numTripleBogey: string
  numStrokeOut: string
}

export interface RoundDataInterface {
  season: number
  round: number
  easyCourse: CourseAlias
  hardCourse: CourseAlias
  scores: PlayerRoundInterface[] | []
}

export const season7Data: RoundDataInterface[] = [
  {
    season: 7,
    round: 1,
    easyCourse: 'OGE',
    hardCourse: 'SSH',
    scores: []
  },
  {
    season: 7,
    round: 2,
    easyCourse: 'BBE',
    hardCourse: 'SLH',
    scores: []
  },
  {
    season: 7,
    round: 3,
    easyCourse: 'QVE',
    hardCourse: 'TSH',
    scores: []
  },
  {
    season: 7,
    round: 4,
    easyCourse: 'SWE',
    hardCourse: '20H',
    scores: []
  },
  {
    season: 7,
    round: 5,
    easyCourse: 'GBE',
    hardCourse: 'TTH',
    scores: []
  },
  {
    season: 7,
    round: 6,
    easyCourse: 'CBE',
    hardCourse: 'EDH',
    scores: []
  },
  {
    season: 7,
    round: 7,
    easyCourse: 'LBE',
    hardCourse: 'AMH',
    scores: []
  },
  {
    season: 7,
    round: 8,
    easyCourse: 'SLE',
    hardCourse: 'OGH',
    scores: []
  }
]

export const hi = 'hi'
