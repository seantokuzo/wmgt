import { courseData, CourseAlias } from '../course-data/wmgt-course-data'

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
  numAblatross: number
  numCondor: number
  numHoleInOne: number
  numBogey: number
  numDoubleBogey: number
  numTripleBogey: number
  numStrokeOut: number
}

export interface RawPlayerRound {
  player: string
  group: number
  easyScorecard: number[]
  easyRoundScore: number
  hardScorecard: number[]
  hardRoundScore: number
}

export interface RoundDataInterface {
  season: number
  round: number
  easyCourse: CourseAlias
  hardCourse: CourseAlias
  scores: PlayerRoundInterface[] | []
}

export interface RawRoundData {
  season: number
  round: number
  easyCourse: CourseAlias
  hardCourse: CourseAlias
  scores: RawPlayerRound[] | []
}

// S6R12 - GROUP 1 OF 21 ENTERED AND CHECKED
export const season6Data: RawRoundData[] = [
  {
    season: 6,
    round: 12,
    easyCourse: 'TTE',
    hardCourse: 'LBH',
    scores: [
      {
        player: 'Otvormeister',
        group: 1,
        easyScorecard: [2, 2, 2, 3, 2, 5, 4, 3, 2, 2, 2, 2, 2, 2, 3, 1, 3, 4],
        easyRoundScore: -11,
        hardScorecard: [3, 5, 5, 8, 3, 2, 4, 2, 5, 2, 3, 4, 4, 5, 6, 6, 3, 6],
        hardRoundScore: 11
      },
      {
        player: 'Captain_Sr',
        group: 1,
        easyScorecard: [1, 1, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 2, 1, 2, 4],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 5, 2, 4, 2, 4, 2, 5, 1, 1, 3, 3, 3, 3, 1, 3, 2],
        hardRoundScore: -17
      },
      {
        player: 'Emill',
        group: 1,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [2, 3, 5, 4, 4, 2, 2, 2, 4, 4, 2, 2, 5, 5, 4, 4, 3, 4],
        hardRoundScore: -4
      },
      {
        player: 'Brit_The_Elder',
        group: 2,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 2, 2, 3, 2, 1, 2, 7],
        easyRoundScore: -13,
        hardScorecard: [3, 3, 5, 4, 2, 3, 2, 2, 4, 2, 1, 3, 4, 5, 2, 2, 5, 2],
        hardRoundScore: -11
      },
      {
        player: 'Bear313',
        group: 2,
        easyScorecard: [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -21,
        hardScorecard: [2, 2, 3, 3, 5, 2, 4, 2, 5, 1, 1, 3, 2, 3, 3, 3, 3, 2],
        hardRoundScore: -16
      },
      {
        player: 'BaruMonkey',
        group: 2,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -19,
        hardScorecard: [4, 3, 4, 6, 4, 2, 3, 3, 4, 2, 2, 3, 2, 4, 3, 6, 4, 3],
        hardRoundScore: -3
      },
      {
        player: 'Zanetti',
        group: 2,
        easyScorecard: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 10],
        easyRoundScore: -15,
        hardScorecard: [2, 3, 4, 3, 2, 2, 2, 1, 4, 1, 1, 3, 2, 3, 3, 2, 2, 2],
        hardRoundScore: -23
      },
      {
        player: 'steven_T',
        group: 3,
        easyScorecard: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [2, 3, 5, 4, 2, 3, 3, 1, 8, 3, 1, 3, 3, 5, 3, 3, 5, 3],
        hardRoundScore: -5
      },
      {
        player: 'The Master',
        group: 3,
        easyScorecard: [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 4],
        easyRoundScore: -20,
        hardScorecard: [2, 3, 6, 4, 4, 2, 3, 1, 7, 1, 1, 4, 3, 2, 3, 3, 4, 8],
        hardRoundScore: -4
      },
      {
        player: 'DERBY_DAZ',
        group: 3,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 2, 3, 1, 1, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -21,
        hardScorecard: [2, 3, 5, 5, 5, 2, 2, 2, 5, 2, 1, 7, 2, 5, 3, 1, 4, 3],
        hardRoundScore: -6
      },
      {
        player: 'Stewie',
        group: 3,
        easyScorecard: [1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [2, 2, 4, 5, 4, 2, 3, 2, 8, 1, 2, 3, 2, 2, 4, 2, 5, 7],
        hardRoundScore: -5
      }
      // {
      //   player: '',
      //   group: 0,
      //   easyScorecard: [],
      //   easyRoundScore: 0,
      //   hardScorecard: [],
      //   hardRoundScore: 0
      // }
    ]
  },
  // { season: 6, round: 11, easyCourse: 'BBE', hardCourse: 'EDH', scores: [] },
  // { season: 6, round: 10, easyCourse: 'AME', hardCourse: 'SWH', scores: [] },
  // { season: 6, round: 9, easyCourse: 'QVE', hardCourse: 'OGH', scores: [] },
  // { season: 6, round: 8, easyCourse: 'SLE', hardCourse: 'GBH', scores: [] },
  // { season: 6, round: 7, easyCourse: 'LBE', hardCourse: 'CBH', scores: [] },
  // { season: 6, round: 6, easyCourse: 'EDE', hardCourse: 'BBH', scores: [] },
  // { season: 6, round: 5, easyCourse: 'SWE', hardCourse: 'SSH', scores: [] },
  {
    season: 6,
    round: 4,
    easyCourse: 'CBE',
    hardCourse: 'QVH',
    scores: [
      {
        player: 'Skorpzz',
        group: 1,
        easyScorecard: [3, 2, 2, 5, 2, 1, 2, 4, 1, 3, 3, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -20,
        hardScorecard: [2, 2, 2, 2, 2, 3, 2, 2, 4, 2, 3, 3, 5, 3, 3, 2, 7, 2],
        hardRoundScore: -9
      },
      {
        player: 'QuestPete',
        group: 1,
        easyScorecard: [2, 3, 2, 3, 2, 4, 3, 3, 2, 3, 3, 2, 2, 2, 3, 1, 2, 5],
        easyRoundScore: -16,
        hardScorecard: [2, 7, 3, 4, 5, 2, 2, 2, 5, 5, 2, 4, 4, 4, 2, 2, 3, 2],
        hardRoundScore: 0
      },
      {
        player: 'Nick',
        group: 1,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 1, 3, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [3, 2, 2, 4, 2, 2, 5, 2, 2, 2, 2, 3, 2, 4, 2, 2, 3, 3],
        hardRoundScore: -13
      },
      {
        player: 'Emill',
        group: 1,
        easyScorecard: [2, 2, 2, 3, 2, 1, 2, 2, 1, 5, 2, 1, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -25,
        hardScorecard: [2, 2, 2, 3, 2, 3, 3, 2, 4, 6, 2, 2, 5, 4, 2, 1, 2, 3],
        hardRoundScore: -10
      },
      {
        player: 'TrippinBill',
        group: 2,
        easyScorecard: [3, 2, 2, 3, 2, 3, 2, 3, 2, 5, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -20,
        hardScorecard: [3, 6, 2, 3, 2, 2, 2, 2, 3, 2, 2, 3, 1, 4, 2, 2, 2, 3],
        hardRoundScore: -14
      },
      {
        player: 'steven_T',
        group: 2,
        easyScorecard: [2, 2, 2, 3, 2, 4, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 5],
        easyRoundScore: -18,
        hardScorecard: [3, 4, 3, 3, 3, 3, 3, 2, 3, 2, 2, 2, 2, 7, 3, 1, 2, 3],
        hardRoundScore: -9
      },
      {
        player: 'Yoda',
        group: 2,
        easyScorecard: [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -24,
        hardScorecard: [2, 2, 4, 3, 2, 3, 3, 2, 4, 3, 2, 3, 5, 4, 2, 4, 2, 4],
        hardRoundScore: -6
      },
      {
        player: 'DERBY_DAZ',
        group: 2,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 1, 4],
        easyRoundScore: -24,
        hardScorecard: [3, 2, 3, 3, 2, 3, 3, 2, 5, 6, 2, 2, 2, 3, 2, 2, 2, 3],
        hardRoundScore: -10
      },
      {
        player: 'Old-T',
        group: 3,
        easyScorecard: [2, 4, 2, 3, 2, 3, 4, 2, 3, 4, 2, 2, 2, 2, 2, 2, 3, 3],
        easyRoundScore: -16,
        hardScorecard: [3, 5, 2, 4, 3, 2, 3, 3, 3, 3, 2, 3, 4, 4, 3, 3, 2, 3],
        hardRoundScore: -5
      },
      {
        player: 'Bear313',
        group: 3,
        easyScorecard: [2, 2, 2, 4, 2, 2, 1, 2, 1, 3, 2, 1, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -26,
        hardScorecard: [2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2],
        hardRoundScore: -21
      },
      {
        player: 'The Master',
        group: 3,
        easyScorecard: [3, 2, 2, 2, 3, 3, 2, 3, 2, 3, 2, 2, 2, 3, 3, 1, 2, 5],
        easyRoundScore: -18,
        hardScorecard: [2, 2, 2, 3, 3, 3, 2, 3, 3, 7, 3, 2, 1, 8, 3, 1, 2, 3],
        hardRoundScore: -7
      },
      {
        player: 'FainNeinGudTwain',
        group: 3,
        easyScorecard: [3, 2, 2, 3, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [2, 2, 2, 3, 2, 3, 2, 2, 4, 2, 2, 2, 2, 3, 2, 2, 2, 4],
        hardRoundScore: -17
      },
      {
        player: 'AmberWave',
        group: 4,
        easyScorecard: [2, 2, 1, 4, 2, 1, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -24,
        hardScorecard: [3, 2, 3, 5, 3, 3, 2, 2, 3, 3, 2, 2, 4, 3, 2, 2, 3, 3],
        hardRoundScore: -10
      },
      {
        player: 'Captain_Sr',
        group: 4,
        easyScorecard: [2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 3],
        easyRoundScore: -25,
        hardScorecard: [2, 2, 2, 3, 3, 2, 2, 2, 3, 4, 2, 2, 2, 2, 3, 2, 2, 4],
        hardRoundScore: -16
      },
      {
        player: 'GarfeyUK',
        group: 4,
        easyScorecard: [2, 2, 2, 3, 2, 1, 2, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -23,
        hardScorecard: [5, 2, 3, 5, 3, 3, 2, 2, 4, 2, 2, 2, 3, 3, 2, 2, 7, 5],
        hardRoundScore: -3
      },
      {
        player: 'StevieCymru',
        group: 4,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 3, 2, 5, 2, 2, 2, 2, 1, 3, 2, 3],
        easyRoundScore: -20,
        hardScorecard: [5, 3, 2, 3, 4, 3, 3, 3, 3, 3, 2, 2, 3, 4, 2, 2, 5, 3],
        hardRoundScore: -5
      },
      {
        player: 'Mike190',
        group: 5,
        easyScorecard: [2, 3, 2, 2, 2, 2, 2, 3, 2, 4, 3, 2, 2, 3, 2, 2, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [3, 3, 3, 3, 3, 3, 3, 2, 4, 2, 3, 2, 3, 4, 2, 1, 2, 4],
        hardRoundScore: -10
      },
      {
        player: 'Brit_The_Elder',
        group: 5,
        easyScorecard: [2, 3, 1, 3, 2, 2, 2, 2, 2, 4, 2, 6, 1, 2, 2, 3, 2, 3],
        easyRoundScore: -19,
        hardScorecard: [3, 2, 4, 4, 2, 2, 3, 3, 3, 3, 2, 2, 4, 3, 3, 2, 3, 4],
        hardRoundScore: -8
      },
      {
        player: 'Shea_No_More',
        group: 5,
        easyScorecard: [3, 2, 3, 3, 2, 1, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 3, 5],
        easyRoundScore: -20,
        hardScorecard: [2, 3, 2, 3, 2, 4, 3, 3, 2, 4, 2, 3, 4, 5, 2, 2, 7, 5],
        hardRoundScore: -2
      },
      {
        player: 'Tmoes',
        group: 5,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 2, 2, 4, 2, 3, 1, 2, 2, 1, 2, 4],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 2, 3, 2, 4, 3, 2, 3, 5, 2, 2, 2, 4, 3, 2, 3, 5],
        hardRoundScore: -9
      },
      {
        player: 'Zanetti',
        group: 6,
        easyScorecard: [2, 2, 2, 3, 2, 3, 2, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -25,
        hardScorecard: [2, 2, 1, 5, 3, 3, 2, 2, 2, 2, 3, 2, 3, 3, 2, 2, 3, 3],
        hardRoundScore: -15
      },
      {
        player: 'Burn1',
        group: 6,
        easyScorecard: [3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -24,
        hardScorecard: [2, 2, 3, 2, 2, 2, 3, 2, 4, 3, 2, 2, 4, 2, 3, 1, 2, 4],
        hardRoundScore: -15
      },
      {
        player: 'TrickyDicky',
        group: 6,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 1, 2, 6, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -21,
        hardScorecard: [2, 2, 2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 3, 3, 2, 2, 2, 2],
        hardRoundScore: -19
      },
      {
        player: 'Stewie',
        group: 7,
        easyScorecard: [2, 2, 2, 2, 1, 2, 2, 2, 1, 5, 2, 2, 2, 2, 1, 2, 2, 4],
        easyRoundScore: -25,
        hardScorecard: [2, 2, 2, 3, 3, 2, 2, 2, 3, 2, 4, 3, 3, 3, 3, 1, 2, 4],
        hardRoundScore: -14
      },
      {
        player: 'Grezza',
        group: 7,
        easyScorecard: [2, 2, 2, 3, 2, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 3],
        easyRoundScore: -22,
        hardScorecard: [3, 3, 3, 3, 2, 2, 3, 4, 2, 4, 4, 2, 5, 3, 2, 2, 3, 5],
        hardRoundScore: -5
      },
      {
        player: 'Krys',
        group: 8,
        easyScorecard: [3, 2, 3, 3, 2, 1, 2, 3, 2, 5, 1, 2, 2, 2, 2, 2, 4, 3],
        easyRoundScore: -19,
        hardScorecard: [5, 5, 2, 3, 5, 3, 3, 2, 3, 4, 2, 3, 1, 5, 4, 2, 3, 3],
        hardRoundScore: -2
      },
      {
        player: 'his_Dudeness',
        group: 8,
        easyScorecard: [1, 2, 2, 3, 1, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -26,
        hardScorecard: [3, 2, 3, 6, 1, 2, 4, 2, 3, 2, 2, 2, 2, 3, 3, 2, 2, 3],
        hardRoundScore: -13
      },
      {
        player: 'cmdrsven',
        group: 8,
        easyScorecard: [3, 2, 2, 3, 2, 2, 2, 3, 2, 4, 2, 3, 2, 2, 2, 2, 2, 5],
        easyRoundScore: -18,
        hardScorecard: [2, 2, 2, 3, 3, 3, 2, 2, 3, 2, 3, 2, 2, 4, 2, 2, 3, 6],
        hardRoundScore: -12
      },
      {
        player: 'strype9',
        group: 8,
        easyScorecard: [3, 2, 2, 3, 1, 2, 2, 3, 2, 3, 2, 2, 2, 3, 2, 3, 2, 5],
        easyRoundScore: -19,
        hardScorecard: [3, 3, 2, 5, 3, 3, 2, 5, 4, 4, 3, 3, 2, 5, 2, 2, 3, 3],
        hardRoundScore: -3
      },
      {
        player: 'Fatfat42',
        group: 9,
        easyScorecard: [3, 2, 2, 4, 2, 1, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [3, 3, 2, 4, 2, 3, 2, 2, 3, 3, 2, 2, 1, 3, 4, 3, 3, 2],
        hardRoundScore: -13
      },
      {
        player: 'southren_jenn_76',
        group: 9,
        easyScorecard: [2, 4, 3, 8, 2, 2, 5, 2, 4, 1, 4, 3, 3, 2, 2, 3, 2, 4],
        easyRoundScore: -7,
        hardScorecard: [6, 2, 5, 6, 4, 4, 6, 5, 2, 7, 2, 1, 4, 3, 2, 2, 3, 5],
        hardRoundScore: 9
      },
      {
        player: 'GreatGoose',
        group: 9,
        easyScorecard: [2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 2, 2, 1, 2, 2, 1, 2, 3],
        easyRoundScore: -29,
        hardScorecard: [4, 2, 3, 5, 2, 3, 3, 2, 5, 3, 2, 4, 4, 5, 3, 3, 3, 4],
        hardRoundScore: 0
      },
      {
        player: 'Calassy',
        group: 9,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 2, 2, 4, 2, 2, 2, 1, 2, 2, 2, 3],
        easyRoundScore: -24,
        hardScorecard: [2, 2, 2, 3, 2, 3, 2, 1, 3, 2, 2, 2, 3, 6, 2, 1, 2, 5],
        hardRoundScore: -15
      }
      // {
      //   player: '',
      //   group: 10,
      //   easyScorecard: [],
      //   easyRoundScore: 0,
      //   hardScorecard: [],
      //   hardRoundScore: 0
      // },
    ]
  }
  // { season: 6, round: 3, easyCourse: 'TSE', hardCourse: 'TTH', scores: [] },
  // { season: 6, round: 2, easyCourse: 'GBE', hardCourse: 'SLH', scores: [] },
  // { season: 6, round: 1, easyCourse: 'OGE', hardCourse: 'AMH', scores: [] }
]

export const checkScores = (round: number) => {
  const roundObj = season6Data.filter((r) => r.round === round)[0]
  const easyCourseObj = courseData.filter((course) => course.alias === roundObj.easyCourse)[0]
  const hardCourseObj = courseData.filter((course) => course.alias === roundObj.hardCourse)[0]

  // CHECK THAT THE COURSE DATA PARS ARE ACCURATE
  // const courseObjParCheck = courseData.every(
  //   (course) => course.par === course.parByHole.reduce((a, b) => a + b, 0)
  // )
  // console.log(courseObjParCheck)

  const scoreCheck = roundObj.scores.map((score) => {
    const easy =
      score.easyScorecard.reduce((a, b) => a + b, 0) - easyCourseObj.par === score.easyRoundScore
    const hard =
      score.hardScorecard.reduce((a, b) => a + b, 0) - hardCourseObj.par === score.hardRoundScore
    return { player: score.player, easy, hard }
  })
  // console.log(scoreCheck)
  const quickieCheck = scoreCheck.every((score) => score.easy && score.hard)
  console.log(quickieCheck ? 'No Problems' : 'Uh oh, better double check them scores')
  const problemScores = scoreCheck.filter((score) => {
    return !score.easy || !score.hard
  })
  console.log('Problem Scores: ', problemScores)
}
