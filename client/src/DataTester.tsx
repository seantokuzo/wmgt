// ****************************
// DATA GOD CHECKER
// ****************************
import { PlayerInterface, allPlayersList } from 'data/player-data/AllPlayersList'

interface FlagObj {
  flag: string
  count: number
}

const flagCount = allPlayersList.reduce((acc: FlagObj[], curr) => {
  if (acc.length === 0) {
    acc.push({ flag: curr.flag, count: 1 })
    return acc
  }

  const flagIndex = acc.findIndex((flagObj) => flagObj.flag === curr.flag)
  if (flagIndex < 0) {
    acc.push({ flag: curr.flag, count: 1 })
    return acc
  }
  acc[flagIndex].count = acc[flagIndex].count + 1
  return acc
}, [])
console.log(flagCount.sort((a, b) => b.count - a.count))

// import { courseData } from 'data/course-data/wmgt-course-data'
// console.log(courseData)

// import { DataGod } from 'data/dataGod'
// console.log(DataGod.getIndexesOfUnusedSeasonPoints([1, 99, 3, 99, 99, 99, 99, 99, 3, 99, 99, 2]))

// console.log(DataGod.getLowestRoundHoleScores(7, 1))
// console.log(DataGod.getRoundAcesPerHole({ season: 7, round: 1 }))
// console.log(DataGod.getSeasonSummaryPlayerPoints(7)[0])
// console.log(DataGod.getSeasonSummaryFromOfficialResults(6))
// console.log(DataGod.getSeasonSummaryFromOfficialResults(5))
// console.log(DataGod.getSeasonSummaryPlayerPoints(7).map((p) => p.totalPoints))
// *******************************************************************

// ****************************
// SEASON 6 MANUAL SCORE INPUT CHECKER
// ****************************
// import { checkScores, convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { checkScores } from './data/in_progress/s6r12_raw-data'
// checkScores(10)
// convertRawRoundData()
// *******************************************************************

// ****************************
// GET PLAYER LIST
// ****************************
// import { getComboList } from 'data/player-data/AllPlayersListRawFlag'
// getComboList()
// import { allPlayersList } from 'data/player-data/AllPlayersList'
// console.log(allPlayersList.length)

// *******************************************************************

// ****************************
// FLAG CONVERSION
// ****************************
// import { flagConverter, allPlayersListRawFlag } from 'data/player-data/AllPlayersListRawFlag'
// const notFound = allPlayersListRawFlag.filter(
//   (player) => !flagConverter.some((p) => p.link === player.flag)
// )
// console.log('Flag Not Found: ', notFound)
// const withFlag = allPlayersListRawFlag.map((player) => {
//   return {
//     player: player.player,
//     flag: flagConverter.filter((flag) => flag.link === player.flag)[0].flag
//   }
// })
// console.log(allPlayersListRawFlag.length)
// console.log(withFlag)
// *******************************************************************

// ****************************
// NEW COURSE CHECKER
// ****************************
// import { courseData, CourseInterface } from 'data/course-data/wmgt-course-data'
// console.log(
//   'Courses with parByHole Problems: ',
//   courseData.reduce((acc: CourseInterface[], curr) => {
//     if (curr.parByHole.reduce((a, b) => a + b, 0) !== curr.par) {
//       acc.push(curr)
//     }
//     return acc
//   }, [])
// )

// SEASON POINTS RACE TO THE FINISH
// import { DataGod } from 'data/dataGod'
// console.log(DataGod.getSeasonTopTenRunningPointTotal(7))

// GET HOLE IN ONE LEADERS FROM SEASON
// import { DataGod } from "data/dataGod"
// console.log(DataGod.getSeasonHoleInOneLeaders(8))
// console.log(DataGod.getSeasonHoleInOneLeaders(7))
// console.log(DataGod.getSeasonHoleInOneLeaders(5))

// SORT COURSES BY PAR (IN STROKES)
// import { courseData } from 'data/course-data/wmgt-course-data'
// console.log(courseData.sort((a, b) => a.par - b.par).map((c) => ({ course: c.alias, par: c.par })))

// BADGES
// import { DataGod } from 'data/dataGod'
// console.log(DataGod.getOnlyBadgeRounds({ season: 8, round: 2 }))
// console.log(DataGod.getRoundDiamondWinner({ season: 8, round: 2 }))
// console.log(DataGod.getCoconutRounds({ season: 8, round: 2 }).scores.map((s) => s.player))
// console.log(
//   DataGod.getOnlyBadgeRounds({ season: 8, round: 3 }).map((p) => ({
//     player: p.player,
//     easyScorecard: p.easyScorecard,
//     hardScorecard: p.hardScorecard
//   }))
// )
// console.log('Diamond Winner: ', DataGod.getRoundDiamondWinner({ season: 8, round: 3 }))
// console.log(
//   'Coconuts: ',
//   DataGod.getCoconutRounds({ season: 8, round: 3 }).scores.map((s) => s.player)
// )

const DataTester = () => {
  return <div className="hidden"></div>
}

export default DataTester
