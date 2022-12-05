const s7sheetIdsByRound = {
  R1: '1131813782',
  R2: '1310582353',
  R3: '2039331353',
  R4: '149051212',
  R5: '680113919',
  R6: '1554734905',
  R7: '1379586954R3',
  R8: '749121011',
  R9: '1407622001'
}

// const sheetIdsArray = Object.values(s7sheetIdsByRound)

const stripPlayerRounds = (sheetId, firstRow, collection = []) => {
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

    const easyScoresArray = rowCellsArray.splice(9, 18).map(num => +num)
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
      numAblatross: +rowCellsArray[12],
      numCondor: +rowCellsArray[13],
      numHoleInOne: +rowCellsArray[14],
      numBogey: +rowCellsArray[15],
      numDoubleBogey: +rowCellsArray[16],
      numTripleBogey: +rowCellsArray[17],
      numStrokeOut: +rowCellsArray[18]
    }
    collection.push(formattedRowObject)
    stripPlayerRounds(sheetId, firstRow + 1, collection)
  }
  return collection
}

// console.log(stripPlayerRounds('1131813782', 3))
// console.log(stripPlayerRounds('1310582353', 3))
// console.log(stripPlayerRounds('2039331353', 3))
// console.log(stripPlayerRounds('149051212', 3))
// console.log(stripPlayerRounds('680113919', 3))
// console.log(stripPlayerRounds('1554734905', 3))
// console.log(stripPlayerRounds('1379586954', 3))
// console.log(stripPlayerRounds('749121011', 3))
console.log(stripPlayerRounds('1407622001', 3))
