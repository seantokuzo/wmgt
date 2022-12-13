import { courseData, CourseAlias } from '../course-data/wmgt-course-data'
import { PlayerRoundInterface, RoundDataInterface } from 'data/round-data/roundTypes'
import { ScrollRestoration } from 'react-router-dom'

export interface RawPlayerRound {
  player: string
  group: number
  easyScorecard: number[]
  easyRoundScore: number
  hardScorecard: number[]
  hardRoundScore: number
}

export interface RawRoundData {
  season: number
  round: number
  easyCourse: CourseAlias
  hardCourse: CourseAlias
  scores: RawPlayerRound[] | []
}

// S6R12 - GROUP 1 OF 21 ENTERED AND CHECKED
export const season6RawData: RawRoundData[] = [
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
      },
      {
        player: 'Mulligan',
        group: 4,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 3, 2, 2, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [5, 3, 4, 6, 3, 2, 3, 3, 8, 1, 1, 3, 2, 7, 2, 2, 5, 3],
        hardRoundScore: -2
      },
      {
        player: 'Dude_Lebowski',
        group: 4,
        easyScorecard: [2, 2, 2, 2, 3, 2, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 5],
        easyRoundScore: -16,
        hardScorecard: [2, 3, 3, 4, 2, 2, 3, 2, 4, 2, 2, 3, 2, 6, 2, 2, 3, 6],
        hardRoundScore: -12
      },
      {
        player: 'Snow',
        group: 5,
        easyScorecard: [2, 1, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 3, 3, 2, 3, 6],
        easyRoundScore: -14,
        hardScorecard: [2, 2, 4, 5, 3, 3, 3, 2, 5, 2, 2, 3, 3, 5, 6, 1, 5, 6],
        hardRoundScore: -3
      },
      {
        player: 'Grezza',
        group: 5,
        easyScorecard: [2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -14,
        hardScorecard: [6, 3, 4, 4, 5, 2, 4, 2, 6, 1, 1, 3, 2, 9, 4, 3, 4, 3],
        hardRoundScore: 1
      },
      {
        player: 'KCRob',
        group: 5,
        easyScorecard: [2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 1, 1, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [3, 3, 4, 4, 3, 2, 4, 1, 4, 2, 1, 4, 2, 4, 3, 2, 5, 4],
        hardRoundScore: -10
      },
      {
        player: 'Mike190',
        group: 6,
        easyScorecard: [2, 1, 2, 3, 2, 2, 3, 3, 4, 2, 1, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -16,
        hardScorecard: [2, 2, 3, 4, 2, 3, 2, 2, 5, 3, 1, 4, 3, 6, 4, 2, 3, 3],
        hardRoundScore: -11
      },
      {
        player: 'Midaswell',
        group: 6,
        easyScorecard: [2, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 1, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [2, 3, 3, 5, 2, 2, 2, 2, 3, 1, 1, 4, 2, 2, 4, 2, 3, 3],
        hardRoundScore: -19
      },
      {
        player: 'Burn1',
        group: 6,
        easyScorecard: [1, 2, 1, 2, 2, 2, 3, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -21,
        hardScorecard: [3, 4, 5, 3, 2, 2, 4, 2, 4, 3, 1, 3, 3, 4, 4, 1, 5, 3],
        hardRoundScore: -9
      },
      {
        player: 'Old-T',
        group: 7,
        easyScorecard: [1, 2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [2, 2, 4, 3, 1, 1, 3, 2, 4, 2, 2, 4, 3, 4, 3, 1, 4, 4],
        hardRoundScore: -16
      },
      {
        player: 'TrickyDicky',
        group: 7,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [2, 2, 4, 4, 4, 3, 4, 2, 7, 4, 2, 3, 2, 3, 4, 2, 3, 4],
        hardRoundScore: -6
      },
      {
        player: 'Mau',
        group: 7,
        easyScorecard: [1, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [2, 3, 4, 4, 2, 2, 3, 2, 5, 1, 1, 3, 3, 4, 3, 2, 4, 2],
        hardRoundScore: -15
      },
      {
        player: 'southren_jenn_76',
        group: 8,
        easyScorecard: [1, 2, 2, 4, 2, 2, 3, 4, 2, 3, 4, 2, 2, 3, 2, 7, 4, 10],
        easyRoundScore: 2,
        hardScorecard: [3, 3, 6, 8, 6, 3, 4, 3, 9, 3, 2, 3, 2, 4, 8, 2, 8, 3],
        hardRoundScore: 15
      },
      {
        player: 'Jennem',
        group: 8,
        easyScorecard: [2, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
        easyRoundScore: -17,
        hardScorecard: [2, 2, 3, 3, 2, 3, 3, 2, 5, 1, 2, 3, 3, 6, 6, 2, 3, 6],
        hardRoundScore: -8
      },
      {
        player: 'Rolyt',
        group: 8,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2],
        easyRoundScore: -20,
        hardScorecard: [2, 3, 6, 5, 2, 2, 4, 2, 4, 1, 2, 2, 2, 5, 4, 2, 4, 3],
        hardRoundScore: -10
      },
      {
        player: 'Halfpint',
        group: 8,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 3, 2, 2, 2, 4],
        easyRoundScore: -14,
        hardScorecard: [2, 3, 2, 4, 2, 3, 4, 2, 4, 1, 1, 6, 3, 2, 3, 1, 5, 7],
        hardRoundScore: -10
      },
      {
        player: 'strype9',
        group: 9,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 10],
        easyRoundScore: -12,
        hardScorecard: [2, 4, 5, 8, 2, 4, 3, 3, 6, 3, 2, 2, 6, 5, 3, 1, 3, 4],
        hardRoundScore: 1
      },
      {
        player: 'Anuebus',
        group: 9,
        easyScorecard: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 3, 4],
        easyRoundScore: -17,
        hardScorecard: [3, 3, 5, 4, 5, 2, 4, 2, 4, 1, 3, 3, 2, 5, 3, 3, 4, 4],
        hardRoundScore: -5
      },
      {
        player: 'Lifeisgood',
        group: 9,
        easyScorecard: [2, 2, 2, 2, 3, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -14,
        hardScorecard: [2, 3, 6, 4, 2, 2, 3, 2, 6, 2, 2, 3, 4, 6, 3, 6, 4, 3],
        hardRoundScore: -2
      },
      {
        player: 'Captain_Shook',
        group: 10,
        easyScorecard: [2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2, 2, 3, 2, 2, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [3, 4, 6, 5, 3, 2, 5, 3, 4, 2, 1, 3, 2, 4, 3, 3, 6, 2],
        hardRoundScore: -4
      },
      {
        player: 'Autodidactic',
        group: 10,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -17,
        hardScorecard: [6, 4, 4, 5, 2, 2, 3, 2, 4, 3, 1, 4, 3, 7, 6, 2, 3, 4],
        hardRoundScore: 0
      },
      {
        player: 'AmberWave',
        group: 10,
        easyScorecard: [2, 1, 2, 2, 2, 2, 4, 2, 2, 3, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [2, 3, 5, 4, 3, 4, 2, 2, 4, 3, 4, 4, 3, 5, 3, 2, 3, 3],
        hardRoundScore: -6
      },
      {
        player: 'Beldemar',
        group: 10,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 2, 1, 2, 4],
        easyRoundScore: -17,
        hardScorecard: [2, 2, 5, 4, 2, 2, 4, 2, 4, 2, 2, 5, 3, 3, 7, 7, 4, 4],
        hardRoundScore: -1
      },
      {
        player: 'joshbenesh',
        group: 11,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 2, 2, 1, 3, 2, 2, 2, 2, 1, 2, 5],
        easyRoundScore: -18,
        hardScorecard: [3, 3, 7, 4, 2, 4, 5, 3, 4, 4, 3, 4, 3, 6, 4, 6, 3, 2],
        hardRoundScore: 5
      },
      {
        player: 'bogibo',
        group: 11,
        easyScorecard: [2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 2, 1, 2, 4],
        easyRoundScore: -17,
        hardScorecard: [3, 2, 4, 5, 4, 2, 3, 3, 6, 3, 2, 4, 1, 5, 3, 1, 3, 6],
        hardRoundScore: -5
      },
      {
        player: 'Squidy19',
        group: 11,
        easyScorecard: [2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [3, 3, 4, 4, 3, 2, 3, 2, 4, 2, 1, 6, 3, 7, 7, 2, 4, 2],
        hardRoundScore: -3
      },
      {
        player: 'ForRealForReal',
        group: 12,
        easyScorecard: [1, 1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 3, 4, 2, 4, 2, 2, 4, 2, 1, 3, 3, 6, 2, 2, 3, 3],
        hardRoundScore: -15
      },
      {
        player: 'GUS',
        group: 12,
        easyScorecard: [2, 1, 2, 2, 2, 2, 3, 2, 5, 2, 2, 2, 2, 2, 2, 1, 2, 2],
        easyRoundScore: -19,
        hardScorecard: [3, 3, 4, 5, 4, 2, 3, 2, 4, 2, 1, 3, 3, 6, 3, 2, 5, 3],
        hardRoundScore: -7
      },
      {
        player: 'deebee64',
        group: 12,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 2, 4, 2, 2, 2, 2, 3, 3, 1, 2, 4],
        easyRoundScore: -16,
        hardScorecard: [3, 3, 4, 4, 3, 3, 3, 2, 4, 2, 2, 5, 2, 4, 4, 2, 5, 2],
        hardRoundScore: -8
      },
      {
        player: 'YUK1N',
        group: 12,
        easyScorecard: [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 4, 4, 3, 3, 2, 2, 5, 1, 1, 3, 4, 6, 4, 2, 4, 2],
        hardRoundScore: -11
      },
      {
        player: 'TrippinBill',
        group: 13,
        easyScorecard: [2, 2, 1, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -17,
        hardScorecard: [2, 3, 6, 3, 3, 2, 3, 2, 2, 6, 1, 3, 4, 3, 3, 2, 3, 3],
        hardRoundScore: -11
      },
      {
        player: 'JacksonHoleInOne',
        group: 13,
        easyScorecard: [2, 1, 2, 2, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -21,
        hardScorecard: [2, 4, 3, 4, 2, 3, 2, 2, 7, 1, 1, 3, 3, 7, 3, 5, 5, 3],
        hardRoundScore: -5
      },
      {
        player: 'SqueezyJibbz',
        group: 13,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 3, 2, 1, 2, 5],
        easyRoundScore: -18,
        hardScorecard: [2, 3, 5, 5, 3, 2, 3, 2, 4, 1, 1, 4, 3, 4, 5, 1, 5, 3],
        hardRoundScore: -9
      },
      {
        player: 'AndyP1970',
        group: 13,
        easyScorecard: [2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2, 1, 2, 5],
        easyRoundScore: -18,
        hardScorecard: [3, 3, 4, 4, 3, 4, 3, 2, 5, 1, 1, 5, 3, 4, 4, 2, 3, 3],
        hardRoundScore: -8
      },
      {
        player: 'his_Dudeness',
        group: 14,
        easyScorecard: [2, 1, 1, 2, 2, 1, 2, 3, 1, 2, 2, 2, 2, 2, 3, 2, 2, 4],
        easyRoundScore: -21,
        hardScorecard: [2, 2, 4, 3, 2, 2, 3, 1, 5, 5, 1, 3, 2, 4, 3, 2, 3, 3],
        hardRoundScore: -15
      },
      {
        player: 'B8Y',
        group: 14,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 5],
        easyRoundScore: -17,
        hardScorecard: [2, 3, 6, 3, 2, 2, 3, 2, 4, 2, 2, 5, 2, 5, 3, 4, 5, 3],
        hardRoundScore: -7
      },
      {
        player: 'NuttyGrandpa',
        group: 14,
        easyScorecard: [2, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 5],
        easyRoundScore: -14,
        hardScorecard: [2, 3, 4, 9, 5, 3, 4, 1, 4, 1, 2, 4, 2, 5, 4, 3, 3, 6],
        hardRoundScore: 0
      },
      {
        player: 'DiscflingerADK',
        group: 15,
        easyScorecard: [2, 1, 2, 2, 2, 2, 3, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -20,
        hardScorecard: [2, 6, 4, 4, 1, 2, 4, 2, 4, 1, 1, 2, 2, 3, 4, 2, 3, 3],
        hardRoundScore: -15
      },
      {
        player: 'Sackdeqb',
        group: 15,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 3, 1, 2, 1, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -20,
        hardScorecard: [3, 2, 3, 7, 2, 4, 3, 2, 7, 2, 2, 3, 2, 3, 5, 2, 3, 3],
        hardRoundScore: -7
      },
      {
        player: 'GreatGoose',
        group: 15,
        easyScorecard: [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
        easyRoundScore: -23,
        hardScorecard: [2, 3, 3, 4, 4, 3, 3, 2, 4, 1, 2, 3, 2, 4, 3, 2, 4, 4],
        hardRoundScore: -12
      },
      {
        player: 'INDY',
        group: 15,
        easyScorecard: [1, 1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 3, 4, 5, 2, 2, 2, 3, 1, 1, 3, 2, 4, 3, 2, 4, 3],
        hardRoundScore: -17
      },
      {
        player: 'ichibuho',
        group: 16,
        easyScorecard: [2, 2, 2, 2, 4, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -17,
        hardScorecard: [2, 2, 4, 4, 2, 2, 4, 2, 5, 1, 1, 4, 3, 2, 3, 2, 3, 4],
        hardRoundScore: -15
      },
      {
        player: 'ElJorge',
        group: 16,
        easyScorecard: [2, 1, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 2, 2, 1, 2, 5],
        easyRoundScore: -19,
        hardScorecard: [2, 2, 5, 4, 4, 4, 3, 3, 4, 3, 2, 4, 2, 5, 3, 2, 3, 4],
        hardRoundScore: -6
      },
      {
        player: 'HBKid',
        group: 16,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 4, 1, 2, 2, 2, 3, 2, 3, 2, 2, 2],
        easyRoundScore: -18,
        hardScorecard: [2, 2, 3, 4, 2, 2, 4, 2, 6, 3, 2, 3, 2, 5, 5, 2, 2, 2],
        hardRoundScore: -12
      },
      {
        player: 'Blutes87',
        group: 17,
        easyScorecard: [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 4],
        easyRoundScore: -23,
        hardScorecard: [2, 2, 5, 4, 3, 2, 3, 2, 4, 1, 1, 3, 2, 6, 3, 1, 4, 5],
        hardRoundScore: -12
      },
      {
        player: 'Jed',
        group: 17,
        easyScorecard: [1, 1, 2, 2, 3, 2, 3, 2, 5, 2, 2, 2, 2, 3, 3, 2, 2, 9],
        easyRoundScore: -9,
        hardScorecard: [4, 4, 5, 6, 4, 4, 4, 4, 6, 4, 4, 5, 4, 6, 5, 4, 5, 5],
        hardRoundScore: 18
      },
      {
        player: 'FIRE_321',
        group: 17,
        easyScorecard: [2, 1, 2, 2, 2, 2, 3, 2, 2, 1, 2, 2, 2, 3, 2, 1, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [2, 3, 3, 4, 3, 3, 3, 2, 6, 1, 1, 4, 3, 7, 3, 6, 3, 3],
        hardRoundScore: -5
      },
      {
        player: 'Calassy',
        group: 18,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -20,
        hardScorecard: [4, 2, 3, 3, 3, 2, 3, 2, 4, 1, 1, 4, 2, 7, 2, 2, 4, 3],
        hardRoundScore: -13
      },
      {
        player: 'chileC.O.W.',
        group: 18,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [2, 3, 4, 5, 2, 2, 3, 3, 4, 2, 2, 4, 2, 3, 3, 2, 2, 4],
        hardRoundScore: -13
      },
      {
        player: 'RICH8523',
        group: 19,
        easyScorecard: [2, 2, 2, 3, 3, 3, 3, 2, 1, 3, 2, 2, 3, 2, 2, 1, 2, 10],
        easyRoundScore: -9,
        hardScorecard: [2, 2, 5, 3, 2, 2, 3, 2, 5, 2, 2, 3, 3, 4, 5, 2, 7, 3],
        hardRoundScore: -8
      },
      {
        player: 'Domey',
        group: 19,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 3, 3, 2, 3, 2, 3, 4],
        easyRoundScore: -13,
        hardScorecard: [2, 3, 6, 4, 3, 4, 4, 4, 7, 3, 2, 5, 3, 4, 6, 1, 3, 3],
        hardRoundScore: 2
      },
      {
        player: 'Sarahloo1971',
        group: 19,
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 1, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [2, 3, 4, 5, 3, 3, 3, 2, 5, 2, 2, 4, 3, 6, 4, 3, 6, 4],
        hardRoundScore: -1
      },
      {
        player: 'Monsoon',
        group: 20,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -17,
        hardScorecard: [2, 3, 4, 4, 4, 4, 5, 2, 3, 3, 1, 3, 3, 2, 7, 1, 3, 3],
        hardRoundScore: -8
      },
      {
        player: 'Rainedrop184',
        group: 20,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 2, 2, 1, 2, 2, 3, 2, 3, 2, 2, 4],
        easyRoundScore: -17,
        hardScorecard: [7, 2, 4, 4, 3, 2, 2, 2, 6, 2, 2, 3, 2, 3, 3, 2, 4, 2],
        hardRoundScore: -10
      },
      {
        player: 'Bartimaeus',
        group: 20,
        easyScorecard: [1, 2, 3, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [3, 2, 4, 4, 2, 2, 3, 1, 7, 5, 1, 3, 2, 5, 2, 3, 3, 4],
        hardRoundScore: -9
      },
      {
        player: 'D3bb13',
        group: 20,
        easyScorecard: [2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 4, 1, 2, 4],
        easyRoundScore: -15,
        hardScorecard: [4, 4, 4, 4, 3, 3, 3, 2, 5, 1, 3, 3, 2, 7, 5, 2, 4, 4],
        hardRoundScore: -2
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
      },
      {
        player: 'TIGERHOODS',
        group: 10,
        easyScorecard: [2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 1, 2, 2, 2, 2, 3, 2, 3],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 3, 4, 2, 2, 2, 2, 4, 3, 2, 2, 3, 4, 1, 1, 2, 3],
        hardRoundScore: -16
      },
      {
        player: 'miketunes',
        group: 10,
        easyScorecard: [3, 3, 2, 3, 3, 4, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 6],
        easyRoundScore: -12,
        hardScorecard: [3, 3, 2, 4, 8, 4, 3, 3, 2, 2, 2, 2, 4, 2, 2, 1, 4, 4],
        hardRoundScore: -5
      },
      {
        player: 'Jennem',
        group: 10,
        easyScorecard: [2, 4, 2, 2, 3, 2, 2, 2, 1, 7, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -19,
        hardScorecard: [7, 4, 3, 4, 2, 2, 3, 2, 5, 5, 2, 2, 5, 2, 3, 2, 2, 4],
        hardRoundScore: -1
      },
      {
        player: 'willsy13',
        group: 11,
        easyScorecard: [2, 3, 2, 2, 2, 2, 2, 3, 2, 4, 2, 2, 2, 2, 1, 1, 2, 4],
        easyRoundScore: -23,
        hardScorecard: [3, 6, 4, 6, 2, 3, 3, 2, 2, 2, 3, 2, 4, 3, 4, 1, 2, 4],
        hardRoundScore: -4
      },
      {
        player: 'Squidy19',
        group: 11,
        easyScorecard: [1, 2, 1, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -27,
        hardScorecard: [3, 2, 2, 3, 2, 3, 3, 5, 4, 2, 2, 3, 3, 4, 2, 1, 3, 2],
        hardRoundScore: -11
      },
      {
        player: 'WickedShack',
        group: 11,
        easyScorecard: [1, 2, 2, 4, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -24,
        hardScorecard: [3, 2, 3, 4, 4, 2, 3, 1, 4, 2, 2, 3, 4, 2, 2, 1, 3, 2],
        hardRoundScore: -13
      },
      {
        player: 'Bartimaeus',
        group: 12,
        easyScorecard: [2, 2, 2, 5, 2, 2, 2, 2, 2, 4, 2, 3, 1, 2, 1, 1, 2, 3],
        easyRoundScore: -23,
        hardScorecard: [3, 2, 2, 3, 3, 3, 3, 2, 6, 3, 2, 1, 2, 4, 2, 1, 2, 5],
        hardRoundScore: -11
      },
      {
        player: 'bogibo',
        group: 12,
        easyScorecard: [3, 3, 2, 3, 2, 1, 2, 3, 2, 4, 2, 1, 2, 2, 2, 3, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [4, 2, 2, 4, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 4],
        hardRoundScore: -14
      },
      {
        player: 'Joaquinypunto',
        group: 12,
        easyScorecard: [2, 2, 3, 3, 1, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -23,
        hardScorecard: [3, 2, 3, 3, 3, 2, 2, 2, 3, 2, 2, 2, 2, 4, 1, 3, 2, 5],
        hardRoundScore: -14
      },
      {
        player: 'Mau',
        group: 12,
        easyScorecard: [2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 4],
        easyRoundScore: -26,
        hardScorecard: [2, 2, 5, 3, 4, 3, 4, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 3],
        hardRoundScore: -11
      },
      {
        player: 'joshbenesh',
        group: 13,
        easyScorecard: [3, 3, 2, 2, 2, 4, 5, 4, 2, 3, 2, 2, 2, 2, 2, 1, 2, 6],
        easyRoundScore: -14,
        hardScorecard: [4, 3, 4, 3, 3, 4, 3, 2, 5, 2, 3, 3, 2, 8, 3, 1, 3, 3],
        hardRoundScore: -1
      },
      {
        player: 'Autodidactic',
        group: 13,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 2, 2, 4, 2, 3, 2, 2, 2, 2, 3, 4],
        easyRoundScore: -19,
        hardScorecard: [4, 2, 3, 4, 2, 3, 3, 3, 3, 3, 2, 2, 1, 8, 2, 1, 3, 6],
        hardRoundScore: -5
      },
      {
        player: 'Halfpint',
        group: 13,
        easyScorecard: [2, 3, 1, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -24,
        hardScorecard: [4, 2, 2, 4, 2, 3, 3, 2, 3, 2, 3, 3, 2, 4, 2, 2, 3, 4],
        hardRoundScore: -10
      },
      {
        player: 'Captain_Shook',
        group: 13,
        easyScorecard: [2, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -22,
        hardScorecard: [2, 3, 2, 4, 3, 3, 2, 4, 3, 2, 2, 4, 3, 2, 4, 1, 2, 4],
        hardRoundScore: -10
      },
      {
        player: 'Nitroustorm',
        group: 14,
        easyScorecard: [3, 3, 2, 3, 2, 2, 2, 3, 2, 4, 2, 3, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -18,
        hardScorecard: [3, 6, 2, 4, 3, 3, 4, 3, 3, 2, 3, 3, 3, 4, 2, 2, 2, 3],
        hardRoundScore: -5
      },
      {
        player: 'the_dak',
        group: 14,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 4, 3, 4],
        easyRoundScore: -16,
        hardScorecard: [3, 3, 2, 4, 2, 3, 2, 3, 4, 4, 2, 2, 3, 3, 2, 1, 3, 7],
        hardRoundScore: -7
      },
      {
        player: 'rockthecraft',
        group: 14,
        easyScorecard: [2, 3, 2, 4, 2, 2, 2, 1, 1, 4, 2, 2, 2, 3, 1, 2, 2, 4],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 3, 4, 2, 3, 2, 2, 3, 2, 2, 3, 3, 3, 3, 3, 2, 2],
        hardRoundScore: -14
      },
      {
        player: 'GUS',
        group: 15,
        easyScorecard: [2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3],
        easyRoundScore: -26,
        hardScorecard: [2, 2, 2, 4, 2, 3, 2, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 4],
        hardRoundScore: -16
      },
      {
        player: 'YUK1N',
        group: 15,
        easyScorecard: [1, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 3],
        easyRoundScore: -26,
        hardScorecard: [2, 3, 1, 3, 3, 2, 3, 2, 3, 2, 1, 3, 3, 5, 2, 2, 3, 2],
        hardRoundScore: -15
      },
      {
        player: 'deebee64',
        group: 15,
        easyScorecard: [3, 2, 2, 3, 2, 1, 2, 2, 2, 4, 2, 2, 2, 2, 1, 3, 2, 3],
        easyRoundScore: -23,
        hardScorecard: [3, 3, 2, 3, 2, 3, 3, 2, 5, 2, 2, 2, 4, 3, 2, 2, 2, 5],
        hardRoundScore: -10
      },
      {
        player: 'TresWolfe',
        group: 16,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 3, 2, 4, 2, 3, 2, 1, 2, 2, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [4, 2, 2, 4, 2, 3, 5, 2, 3, 3, 2, 2, 4, 2, 2, 2, 2, 5],
        hardRoundScore: -9
      },
      {
        player: 'SinfulbeingGC',
        group: 16,
        easyScorecard: [2, 4, 3, 2, 2, 2, 2, 3, 2, 6, 2, 2, 2, 2, 2, 2, 2, 5],
        easyRoundScore: -16,
        hardScorecard: [3, 3, 2, 4, 3, 2, 3, 1, 4, 5, 4, 2, 4, 4, 2, 3, 2, 7],
        hardRoundScore: -2
      },
      {
        player: 'Caramel',
        group: 16,
        easyScorecard: [2, 2, 1, 2, 3, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 1, 2, 6],
        easyRoundScore: -21,
        hardScorecard: [4, 2, 4, 4, 2, 2, 3, 1, 3, 2, 2, 2, 1, 5, 2, 1, 2, 3],
        hardRoundScore: -15
      },
      {
        player: 'SD_Diver',
        group: 17,
        easyScorecard: [1, 2, 2, 3, 2, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -25,
        hardScorecard: [2, 4, 2, 4, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 2, 1, 2, 3],
        hardRoundScore: -17
      },
      {
        player: 'Rolyt',
        group: 17,
        easyScorecard: [2, 2, 2, 3, 2, 2, 1, 2, 1, 4, 2, 2, 2, 2, 1, 2, 2, 3],
        easyRoundScore: -26,
        hardScorecard: [2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 1, 4, 2],
        hardRoundScore: -18
      },
      {
        player: 'Matt916',
        group: 17,
        easyScorecard: [2, 3, 2, 2, 2, 2, 2, 3, 1, 3, 2, 3, 1, 2, 2, 2, 1, 3],
        easyRoundScore: -25,
        hardScorecard: [2, 2, 2, 3, 2, 3, 2, 2, 3, 2, 2, 2, 4, 6, 2, 1, 4, 3],
        hardRoundScore: -13
      },
      {
        player: 'ElJorge',
        group: 17,
        easyScorecard: [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 4, 2, 2, 2, 1, 1, 3],
        easyRoundScore: -26,
        hardScorecard: [2, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3, 3, 3],
        hardRoundScore: -19
      },
      {
        player: 'Browner',
        group: 18,
        easyScorecard: [2, 2, 2, 3, 1, 1, 2, 2, 2, 4, 2, 2, 2, 2, 1, 2, 3, 3],
        easyRoundScore: -25,
        hardScorecard: [3, 2, 2, 3, 4, 4, 2, 2, 3, 2, 2, 2, 2, 8, 3, 2, 2, 3],
        hardRoundScore: -9
      },
      {
        player: 'Blutes87',
        group: 18,
        easyScorecard: [3, 2, 2, 2, 2, 1, 2, 2, 1, 4, 2, 2, 2, 2, 2, 2, 1, 3],
        easyRoundScore: -26,
        hardScorecard: [3, 2, 2, 3, 3, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2],
        hardRoundScore: -18
      },
      {
        player: 'JacksonHoleInOne',
        group: 18,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 3, 2, 4, 2, 2, 2, 2, 1, 2, 2, 3],
        easyRoundScore: -23,
        hardScorecard: [2, 2, 2, 3, 3, 3, 3, 5, 2, 2, 3, 2, 2, 4, 2, 2, 2, 3],
        hardRoundScore: -13
      },
      {
        player: 'Froman',
        group: 18,
        easyScorecard: [3, 2, 2, 3, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 2, 3, 2, 3],
        easyRoundScore: -22,
        hardScorecard: [3, 2, 2, 3, 2, 5, 4, 2, 4, 3, 2, 2, 2, 3, 2, 2, 2, 5],
        hardRoundScore: -10
      },
      {
        player: 'Toaster',
        group: 19,
        easyScorecard: [3, 2, 2, 3, 1, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -25,
        hardScorecard: [3, 2, 2, 4, 2, 3, 2, 2, 4, 2, 2, 3, 5, 3, 2, 2, 2, 3],
        hardRoundScore: -12
      },
      {
        player: 'BANKERPOPS',
        group: 19,
        easyScorecard: [3, 4, 2, 3, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [3, 6, 2, 5, 2, 3, 2, 2, 3, 2, 2, 3, 3, 2, 3, 2, 2, 3],
        hardRoundScore: -10
      },
      {
        player: 'Dude_Lebowski',
        group: 19,
        easyScorecard: [2, 3, 2, 5, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4],
        easyRoundScore: -18,
        hardScorecard: [3, 2, 2, 3, 2, 2, 2, 3, 6, 3, 3, 2, 3, 6, 2, 2, 3, 4],
        hardRoundScore: -7
      },
      {
        player: 'ichibuho',
        group: 19,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 3, 1, 1, 10],
        easyRoundScore: -15,
        hardScorecard: [2, 2, 4, 3, 2, 3, 2, 3, 3, 2, 3, 2, 2, 3, 2, 2, 5, 5],
        hardRoundScore: -10
      },
      {
        player: 'INDY',
        group: 20,
        easyScorecard: [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 3, 2, 2, 1, 2, 2, 3],
        easyRoundScore: -27,
        hardScorecard: [2, 2, 1, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3],
        hardRoundScore: -20
      },
      {
        player: 'KCRob',
        group: 20,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 2, 1, 5, 2, 2, 2, 2, 1, 1, 2, 3],
        easyRoundScore: -24,
        hardScorecard: [2, 2, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 4, 2, 1, 2, 3],
        hardRoundScore: -21
      },
      {
        player: 'Jed',
        group: 20,
        easyScorecard: [2, 2, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        easyRoundScore: -25,
        hardScorecard: [3, 2, 2, 4, 2, 3, 3, 2, 2, 2, 2, 4, 4, 5, 3, 1, 3, 3],
        hardRoundScore: -10
      },
      {
        player: 'StrokeLimitReached',
        group: 20,
        easyScorecard: [2, 4, 1, 6, 1, 2, 2, 2, 2, 5, 3, 2, 2, 2, 1, 2, 1, 4],
        easyRoundScore: -19,
        hardScorecard: [2, 4, 2, 3, 2, 3, 3, 2, 4, 2, 2, 2, 5, 3, 1, 1, 2, 3],
        hardRoundScore: -14
      },
      {
        player: 'FIRE_321',
        group: 21,
        easyScorecard: [2, 2, 3, 3, 1, 2, 2, 3, 2, 5, 2, 2, 2, 2, 1, 1, 3, 3],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 2, 3, 2, 4, 2, 2, 2, 3, 2, 2, 3, 5, 2, 2, 2, 3],
        hardRoundScore: -15
      },
      {
        player: 'SqueezyJibbz',
        group: 21,
        easyScorecard: [3, 2, 2, 3, 2, 1, 3, 1, 2, 3, 2, 2, 2, 2, 2, 2, 3, 3],
        easyRoundScore: -23,
        hardScorecard: [2, 2, 2, 4, 2, 2, 3, 2, 3, 2, 2, 1, 2, 4, 3, 2, 2, 3],
        hardRoundScore: -17
      },
      {
        player: 'Mulligan',
        group: 21,
        easyScorecard: [3, 2, 2, 3, 2, 2, 2, 2, 1, 3, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -25,
        hardScorecard: [6, 2, 3, 3, 3, 3, 2, 2, 3, 2, 2, 3, 1, 4, 2, 1, 4, 2],
        hardRoundScore: -12
      },
      {
        player: 'Sackdeqb',
        group: 22,
        easyScorecard: [2, 2, 2, 3, 2, 2, 3, 2, 2, 4, 4, 2, 2, 2, 2, 1, 2, 4],
        easyRoundScore: -20,
        hardScorecard: [3, 4, 2, 3, 2, 2, 3, 2, 2, 3, 2, 3, 1, 8, 2, 2, 4, 3],
        hardRoundScore: -9
      },
      {
        player: 'DiscflingerADK',
        group: 22,
        easyScorecard: [2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 2, 2, 2, 3],
        easyRoundScore: -24,
        hardScorecard: [2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 4, 2, 4, 3],
        hardRoundScore: -16
      },
      {
        player: 'CleverFellow',
        group: 22,
        easyScorecard: [2, 3, 2, 2, 1, 1, 2, 2, 2, 3, 2, 2, 1, 2, 2, 1, 2, 3],
        easyRoundScore: -28,
        hardScorecard: [2, 2, 3, 5, 2, 3, 3, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 3],
        hardRoundScore: -19
      },
      {
        player: 'Monsoon',
        group: 23,
        easyScorecard: [2, 2, 2, 3, 2, 1, 3, 2, 2, 5, 2, 2, 2, 2, 2, 3, 1, 4],
        easyRoundScore: -21,
        hardScorecard: [3, 2, 3, 4, 5, 2, 3, 2, 3, 4, 2, 2, 3, 5, 3, 1, 2, 5],
        hardRoundScore: -6
      },
      {
        player: 'VenomShadow32',
        group: 23,
        easyScorecard: [2, 2, 3, 3, 3, 2, 2, 3, 3, 4, 3, 3, 2, 2, 3, 2, 5, 5],
        easyRoundScore: -11,
        hardScorecard: [3, 3, 6, 5, 2, 3, 2, 2, 5, 7, 6, 3, 8, 5, 4, 3, 4, 7],
        hardRoundScore: 18
      },
      {
        player: 'Rainedrop184',
        group: 23,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 6],
        easyRoundScore: -19,
        hardScorecard: [3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 2, 2, 3, 3, 2, 1, 3, 8],
        hardRoundScore: -12
      },
      {
        player: 'ARMY_OF_ONE',
        group: 23,
        easyScorecard: [2, 5, 1, 2, 2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -22,
        hardScorecard: [3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 2, 2, 2, 8, 2, 1, 2, 4],
        hardRoundScore: -11
      },
      {
        player: 'RICH8523',
        group: 24,
        easyScorecard: [2, 5, 2, 2, 2, 1, 2, 3, 2, 5, 2, 3, 2, 2, 2, 3, 2, 4],
        easyRoundScore: -17,
        hardScorecard: [2, 3, 6, 5, 3, 3, 2, 2, 2, 3, 2, 2, 1, 5, 2, 1, 2, 3],
        hardRoundScore: -11
      },
      {
        player: 'Ludachris',
        group: 24,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 5],
        easyRoundScore: -19,
        hardScorecard: [2, 2, 5, 4, 3, 3, 3, 2, 2, 4, 2, 2, 8, 5, 3, 3, 2, 5],
        hardRoundScore: 0
      },
      {
        player: 'ForRealForReal',
        group: 24,
        easyScorecard: [5, 2, 2, 4, 1, 1, 2, 2, 2, 1, 2, 3, 2, 2, 2, 2, 2, 3],
        easyRoundScore: -23,
        hardScorecard: [2, 2, 1, 3, 2, 3, 3, 3, 3, 2, 2, 2, 4, 3, 2, 2, 2, 3],
        hardRoundScore: -16
      },
      {
        player: 'Midaswell',
        group: 24,
        easyScorecard: [3, 2, 2, 3, 1, 2, 2, 2, 1, 9, 1, 3, 2, 1, 1, 2, 1, 4],
        easyRoundScore: -21,
        hardScorecard: [2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
        hardRoundScore: -18
      },
      {
        player: 'Julian1830',
        group: 25,
        easyScorecard: [2, 2, 1, 3, 2, 2, 2, 2, 2, 4, 3, 2, 3, 3, 1, 2, 2, 3],
        easyRoundScore: -22,
        hardScorecard: [2, 6, 1, 4, 2, 3, 3, 5, 6, 2, 2, 2, 4, 3, 3, 4, 3, 3],
        hardRoundScore: -2
      },
      {
        player: 'ET154',
        group: 25,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 1, 1, 3],
        easyRoundScore: -24,
        hardScorecard: [3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 2, 5, 3, 3, 3, 3],
        hardRoundScore: -9
      },
      {
        player: 'Anuebus',
        group: 25,
        easyScorecard: [2, 2, 2, 4, 2, 2, 2, 3, 2, 4, 4, 2, 2, 2, 3, 1, 2, 5],
        easyRoundScore: -17,
        hardScorecard: [2, 2, 2, 3, 3, 3, 3, 2, 3, 3, 2, 2, 4, 4, 3, 1, 2, 4],
        hardRoundScore: -12
      },
      {
        player: 'Sarahloo1971',
        group: 26,
        easyScorecard: [2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 1, 2, 3, 3, 3],
        easyRoundScore: -21,
        hardScorecard: [3, 3, 2, 4, 2, 3, 2, 2, 3, 2, 2, 3, 2, 4, 2, 2, 3, 3],
        hardRoundScore: -13
      },
      {
        player: 'Indianchief',
        group: 26,
        easyScorecard: [2, 3, 2, 3, 2, 2, 2, 2, 2, 4, 2, 3, 2, 2, 2, 2, 2, 4],
        easyRoundScore: -20,
        hardScorecard: [4, 2, 3, 4, 2, 4, 2, 3, 4, 4, 2, 1, 7, 6, 4, 2, 4, 3],
        hardRoundScore: 1
      },
      {
        player: 'NuttyGrandpa',
        group: 26,
        easyScorecard: [2, 4, 3, 2, 2, 1, 2, 2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
        easyRoundScore: -20,
        hardScorecard: [5, 2, 2, 4, 2, 5, 2, 2, 3, 2, 3, 6, 3, 3, 2, 2, 3, 3],
        hardRoundScore: -6
      }
    ]
  }
  // { season: 6, round: 3, easyCourse: 'TSE', hardCourse: 'TTH', scores: [] },
  // { season: 6, round: 2, easyCourse: 'GBE', hardCourse: 'SLH', scores: [] },
  // { season: 6, round: 1, easyCourse: 'OGE', hardCourse: 'AMH', scores: [] }
]

export const checkScores = (round: number) => {
  const roundObj = season6RawData.filter((r) => r.round === round)[0]
  const easyCourseObj = courseData.filter((course) => course.alias === roundObj.easyCourse)[0]
  const hardCourseObj = courseData.filter((course) => course.alias === roundObj.hardCourse)[0]

  // CHECK THAT THE COURSE DATA PARS ARE ACCURATE
  // const courseObjParCheck = courseData.every(
  //   (course) => course.par === course.parByHole.reduce((a, b) => a + b, 0)
  // )
  // console.log(courseObjParCheck)
  const duplicatePlayers = (roundObj.scores as RawPlayerRound[]).reduce(
    (acc: string[], curr, i) => {
      const withoutPlayer = [...roundObj.scores]
      withoutPlayer.splice(i, 1)
      if (withoutPlayer.every((score) => score.player !== curr.player)) {
        return acc
      } else {
        return [...acc, curr.player]
      }
    },
    []
  )
  console.log('Duplicate Players: ', duplicatePlayers)

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

export const convertRawRoundData = (rawSeasonData: RawRoundData[] = season6RawData) => {
  const withoutRankOrPoints = rawSeasonData.map((round) => {
    const easyCourse = courseData.filter((c) => c.alias === round.easyCourse)[0]
    const hardCourse = courseData.filter((c) => c.alias === round.hardCourse)[0]
    return {
      ...round,
      scores: round.scores.map((score) => {
        const easyScores = score.easyScorecard.map((score, i) => score - easyCourse.parByHole[i])
        const hardScores = score.hardScorecard.map((score, i) => score - hardCourse.parByHole[i])
        return {
          roundRank: 1,
          player: score.player,
          easyRoundTotal: score.easyScorecard.reduce((a, b) => a + b, 0),
          hardRoundTotal: score.hardScorecard.reduce((a, b) => a + b, 0),
          seasonPointsEarned: 1,
          easyRoundScore: score.easyRoundScore,
          hardRoundScore: score.hardRoundScore,
          totalToPar: score.easyRoundScore + score.hardRoundScore,
          coconut: easyScores.every((s) => s <= 0) && hardScores.every((s) => s <= 0),
          easyScorecard: score.easyScorecard,
          hardScorecard: score.hardScorecard,
          numPar:
            easyScores.reduce((acc, curr) => {
              return curr === 0 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === 0 ? acc + 1 : acc
            }, 0),
          numBirdie:
            easyScores.reduce((acc, curr) => {
              return curr === -1 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === -1 ? acc + 1 : acc
            }, 0),
          numEagle:
            easyScores.reduce((acc, curr) => {
              return curr === -2 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === -2 ? acc + 1 : acc
            }, 0),
          numAlbatross:
            easyScores.reduce((acc, curr) => {
              return curr === -3 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === -3 ? acc + 1 : acc
            }, 0),
          numCondor:
            easyScores.reduce((acc, curr) => {
              return curr === -4 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === -4 ? acc + 1 : acc
            }, 0),
          numHoleInOne:
            score.easyScorecard.reduce((acc, curr) => {
              return curr === 1 ? acc + 1 : acc
            }, 0) +
            score.hardScorecard.reduce((acc, curr) => {
              return curr === 1 ? acc + 1 : acc
            }, 0),
          numBogey:
            easyScores.reduce((acc, curr) => {
              return curr === 1 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === 1 ? acc + 1 : acc
            }, 0),
          numDoubleBogey:
            easyScores.reduce((acc, curr) => {
              return curr === 2 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === 2 ? acc + 1 : acc
            }, 0),
          numTripleBogey:
            easyScores.reduce((acc, curr) => {
              return curr === 3 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === 3 ? acc + 1 : acc
            }, 0),
          numStrokeOut:
            easyScores.reduce((acc, curr) => {
              return curr === 4 ? acc + 1 : acc
            }, 0) +
            hardScores.reduce((acc, curr) => {
              return curr === 4 ? acc + 1 : acc
            }, 0)
        }
      })
    }
  })
  // console.log(withoutRankOrPoints)

  const sortedByScore = withoutRankOrPoints.map((round) => {
    return {
      ...round,
      scores: round.scores.sort((a, b) => a.totalToPar - b.totalToPar)
    }
  })
  // console.log(sortedByScore)

  const rankAdded = sortedByScore
    .map((round) => {
      return {
        ...round,
        scores: round.scores.map((score) => {
          const rank = round.scores.reduce((acc, s) => {
            return s.totalToPar < score.totalToPar ? acc + 1 : acc
          }, 1)
          return {
            ...score,
            roundRank: rank
          }
        })
      }
    })
    .sort((a, b) => a.round - b.round)

  console.log(rankAdded)
}
