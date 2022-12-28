import { season7OfficialSheetData } from './s7officialSheetsRoundData.js'

const s7sheetIdsByRound = {
  R1: '1131813782',
  R2: '1310582353',
  R3: '2039331353',
  R4: '149051212',
  R5: '680113919',
  R6: '1554734905',
  R7: '1379586954',
  R8: '749121011',
  R9: '1407622001',
  R10: '1728697580',
  R11: '137577855'
}

const nonCharacterRegex = /[^a-zA-Z0-9]/g

// **********************************************************************
// SCRAPE STEVEN T SHEETS FOR FULL ROUND DATA
// **********************************************************************
const stripPlayerRounds = (sheetId, firstRow, round, collection = []) => {
  // SCRAPE STEVEN T SHEETS
  if (document.getElementById(`${sheetId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${sheetId}R${firstRow}`).parentElement
    const rowCells = rowEl.querySelectorAll('td')
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }

    if (rowCellsArray.length < 50) return
    // console.log(rowCellsArray.length)
    if (rowCellsArray.length === 56 && rowCellsArray.includes('🥥')) {
      rowCellsArray.splice(9, 1)
    }
    if (rowCellsArray.length === 55 && !rowCellsArray.includes('🥥')) {
      rowCellsArray.splice(8, 1)
    }
    if (rowCellsArray.length === 54) {
      rowCellsArray.splice(8, 0, false)
    }

    // console.log(rowCellsArray)
    // console.log(rowCellsArray.length)

    const easyScoresArray = rowCellsArray.splice(9, 18).map((num) => +num)
    const hardScoresArray = rowCellsArray.splice(9, 18).map((num) => +num)

    const formattedRowObject = {
      roundRank: +rowCellsArray[2],
      player: rowCellsArray[4],
      easyRoundTotal: +rowCellsArray[0],
      hardRoundTotal: +rowCellsArray[1],
      seasonPointsEarned: +rowCellsArray[3],
      easyRoundScore: +rowCellsArray[5],
      hardRoundScore: +rowCellsArray[6],
      totalToPar: +rowCellsArray[7],
      coconut: rowCellsArray[8] === '🥥',
      easyScorecard: easyScoresArray,
      hardScorecard: hardScoresArray,
      numPar: +rowCellsArray[9],
      numBirdie: +rowCellsArray[10],
      numEagle: +rowCellsArray[11],
      numAlbatross: +rowCellsArray[12],
      numCondor: +rowCellsArray[13],
      numHoleInOne: +rowCellsArray[14],
      numBogey: +rowCellsArray[15],
      numDoubleBogey: +rowCellsArray[16],
      numTripleBogey: +rowCellsArray[17],
      numStrokeOut: +rowCellsArray[18]
    }
    const officialRoundObj = season7OfficialSheetData.filter((r) => r.round === round)[0]
    const officialPlayer = officialRoundObj.officialScores.filter(
      (p) => p.player.replaceAll(nonCharacterRegex, '').toLowerCase() === formattedRowObject.player.replaceAll(nonCharacterRegex, '').toLowerCase()
    )[0]
    if (!officialPlayer) return console.log(formattedRowObject.player)

    // CHECK AGAINST OFFICIAL DATA - USE OFFICIAL IF WRONG
    const checkPlayerName = officialPlayer.player === formattedRowObject.player
    if (!checkPlayerName) {
      console.log('Player name swapped: ', formattedRowObject.player, officialPlayer.player)
      formattedRowObject.player = officialPlayer.player
    }

    const checkEasyScore = officialPlayer.easyRoundScore === formattedRowObject.easyRoundScore
    if (!checkEasyScore) {
      console.log(officialPlayer.player, 'Easy Score Fail')
      console.log(officialPlayer.easyRoundScore, formattedRowObject.easyRoundScore)
    }

    const checkHardScore = officialPlayer.hardRoundScore === formattedRowObject.hardRoundScore
    if (!checkHardScore) {
      console.log(officialPlayer.player, 'Hard Score Fail')
      console.log(officialPlayer.hardRoundScore, formattedRowObject.hardRoundScore)
    }

    const checkTotalToPar = officialPlayer.totalToPar === formattedRowObject.totalToPar
    if (!checkTotalToPar) console.log(round, officialPlayer.player, 'Total Score Fail')

    const checkRank = officialPlayer.roundRank === formattedRowObject.roundRank
    if (!checkRank) console.log(round, officialPlayer.player, 'Round Rank Fail')

    const checkSeasonPoints = officialPlayer.seasonPointsEarned === formattedRowObject.seasonPointsEarned
    if (!checkSeasonPoints) {
      formattedRowObject.seasonPointsEarned = officialPlayer.seasonPointsEarned
      console.log(officialPlayer.player, 'Season Points Replaced with official')
    }

    collection.push(formattedRowObject)
    stripPlayerRounds(sheetId, firstRow + 1, round, collection)
  }
  return collection
}

// OLD
// console.log(stripPlayerRounds(s7sheetIdsByRound.R1, 3, 1))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R2, 3, 2))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R3, 3, 3))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R4, 3, 4))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R5, 3, 5))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R6, 3, 6))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R7, 3, 7))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R8, 3, 8))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R9, 3, 9))
// console.log(stripPlayerRounds(s7sheetIdsByRound.R10, 3, 10))
console.log(stripPlayerRounds(s7sheetIdsByRound.R11, 3, 11))

// **********************************************************************
// SCRAPE OFFICIAL SHEETS FOR BASIC ROUND DATA
// **********************************************************************
// const officialSheets = {
//   R1: '430215781',
//   R2: '1632913315',
//   R3: '1277572209',
//   R4: '398971102',
//   R5: '1517004937',
//   R6: '502817299',
//   R7: '283795469',
//   R8: '597233959',
//   R9: '596144451',
//   R10: '58714627',
//   R11: '261679476'
// }

// const numRegex = /[0-9]/

// const stripOfficialSheet = (sheetId, firstRow, collection = []) => {
//   // OFFICIAL SHEET SCRAPER
//   if (document.getElementById(`${sheetId}R${firstRow}`)) {
//     const rowEl = document.getElementById(`${sheetId}R${firstRow}`).parentElement

//     const rowCells = rowEl.querySelectorAll('td')
//     let rowCellsArray = []
//     for (const cell of rowCells) {
//       if (cell.textContent) {
//         rowCellsArray.push(cell.textContent.trim())
//       }
//     }
//     if (!numRegex.test(rowCellsArray[0][0])) return 'derp'
//     if (rowCellsArray.length < 5) return 'derp'

//     if (+rowCellsArray[3] + +rowCellsArray[4] !== +rowCellsArray[5]) {
//       console.log("This score doesn't add up: ", rowCellsArray[2])
//     }

//     const playerObj = {
//       player: rowCellsArray[2],
//       roundRank: +rowCellsArray[0],
//       easyRoundScore: +rowCellsArray[3],
//       hardRoundScore: +rowCellsArray[4],
//       totalToPar: +rowCellsArray[5],
//       seasonPointsEarned: +rowCellsArray[6]
//     }
//     collection.push(playerObj)
//     stripOfficialSheet(sheetId, firstRow + 1, collection)
//   }
//   return collection
// }

// console.log('Hello')
// console.log(stripOfficialSheet(officialSheets.R1, 6))
// console.log(stripOfficialSheet(officialSheets.R2, 6))
// console.log(stripOfficialSheet(officialSheets.R3, 6))
// console.log(stripOfficialSheet(officialSheets.R4, 6))
// console.log(stripOfficialSheet(officialSheets.R5, 6))
// console.log(stripOfficialSheet(officialSheets.R6, 6))
// console.log(stripOfficialSheet(officialSheets.R7, 6))
// console.log(stripOfficialSheet(officialSheets.R8, 6))
// console.log(stripOfficialSheet(officialSheets.R9, 6))
// console.log(stripOfficialSheet(officialSheets.R10, 6))
// console.log(stripOfficialSheet(officialSheets.R11, 6))
