// ****************************
// DATA GOD CHECKER
// ****************************
// import { DataGod } from 'data/dataGod'
// console.log(DataGod.getIndexesOfUnusedSeasonPoints([1, 99, 3, 99, 99, 99, 99, 99, 3, 99, 99, 2]))

// console.log(DataGod.getLowestRoundHoleScores(7, 1))
// console.log(DataGod.getRoundAcesPerHole({ season: 7, round: 1 }))
// console.log(DataGod.getSeasonSummaryPlayerPoints(7))
// console.log(DataGod.getSeasonSummaryPlayerPoints(7).map((p) => p.totalPoints))
// *******************************************************************

// ****************************
// SEASON 6 MANUAL SCORE INPUT CHECKER
// ****************************
// import { checkScores, convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { checkScores } from './data/in_progress/s6r12_raw-data'
// checkScores(11)
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

const DataTester = () => {
  return <div className="hidden"></div>
}

export default DataTester
