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
        easyScorecard: [2, 2, 2, 3, 2, 5, 4, 3, 2, 2, 2, 2, 2, 2, 3, 1, 3, 4],
        easyRoundScore: -11,
        hardScorecard: [3, 5, 5, 8, 3, 2, 4, 2, 5, 2, 3, 4, 4, 5, 6, 6, 3, 6],
        hardRoundScore: 11
      },
      {
        player: 'Captain_Sr',
        easyScorecard: [1, 1, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 2, 1, 2, 4],
        easyRoundScore: -22,
        hardScorecard: [2, 2, 5, 2, 4, 2, 4, 2, 5, 1, 1, 3, 3, 3, 3, 1, 3, 2],
        hardRoundScore: -17
      },
      {
        player: 'Emill',
        easyScorecard: [1, 2, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 2, 2, 2, 1, 2, 3],
        easyRoundScore: -21,
        hardScorecard: [2, 3, 5, 4, 4, 2, 2, 2, 4, 4, 2, 2, 5, 5, 4, 4, 3, 4],
        hardRoundScore: -4
      }
    ]
  }
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
