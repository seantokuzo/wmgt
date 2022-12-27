import { DataGod } from 'data/dataGod'
// console.log(DataGod.getLowestRoundHoleScores(7, 1))
// console.log(DataGod.getRoundAcesPerHole({ season: 7, round: 1 }))
console.log(DataGod.getSeasonSummaryPlayerPoints(7))

// import { checkScores, convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { checkScores } from './data/in_progress/s6r12_raw-data'
// checkScores(11)
// convertRawRoundData()

// import { season6RawData } from './data/in_progress/s6r12_raw-data'
// console.log(season6RawData.filter((r) => r.round === 11)[0].scores.length)

// import { getComboList } from 'data/player-data/AllPlayersList'
// getComboList()

// // FLAG CONVERSION
// import { flagConverter, allPlayersList } from 'data/player-data/AllPlayersList'
// const notFound = allPlayersList.filter(
//   (player) => !flagConverter.some((p) => p.link === player.flag)
// )
// console.log('Flag Not Found: ', notFound)

const DataTester = () => {
  return <div className="hidden"></div>
}

export default DataTester
