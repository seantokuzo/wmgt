const stripPlayerRoundOne = (sheetId, firstRow, collection = []) => {
  if (document.getElementById(`${sheetId}R${firstRow}`)) {
    const rowEl = document.getElementById(
      `${sheetId}R${firstRow}`
    ).parentElement
    const rowCells = rowEl.querySelectorAll('td')
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) rowCellsArray.push(cell.textContent)
    }

    if (rowCellsArray.length < 80) return

    const easyScoresArray = rowCellsArray.splice(8, 18)
    const hardScoresArray = rowCellsArray.splice(8, 18)
    const easyHoleScoreNames = rowCellsArray.splice(19, 18)
    const hardHoleScoreNames = rowCellsArray.splice(18, 18)
    rowCellsArray.splice(rowCellsArray.length - 1, 1)

    const formattedRowObject = {
      easyRoundTotalStrokes: rowCellsArray[0],
      hardRoundTotalStrokes: rowCellsArray[1],
      roundRank: rowCellsArray[2],
      seasonPointsEarned: rowCellsArray[3],
      player: rowCellsArray[4],
      easyRoundScore: rowCellsArray[5],
      hardRoundScore: rowCellsArray[6],
      totalToPar: rowCellsArray[7],
      easyScorecard: easyScoresArray,
      hardScorecard: hardScoresArray,
      numPars: rowCellsArray[8],
      numBirdie: rowCellsArray[9],
      numEagle: rowCellsArray[10],
      numAblatross: rowCellsArray[11],
      numHoleInOne: rowCellsArray[12],
      numBogey: rowCellsArray[13],
      numDoubleBogey: rowCellsArray[14],
      numTripleBogey: rowCellsArray[15],
      numStrokeOut: rowCellsArray[16],
      easyScores: easyHoleScoreNames,
      hardScores: hardHoleScoreNames
    }
    collection.push(formattedRowObject)
    stripPlayerRoundOne(sheetId, firstRow + 1, collection)
  }
  return collection
}

const stripPlayerRounds = (sheetId, firstRow, collection = []) => {
  if (document.getElementById(`${sheetId}R${firstRow}`)) {
    const rowEl = document.getElementById(
      `${sheetId}R${firstRow}`
    ).parentElement
    const rowCells = rowEl.querySelectorAll('td')
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }

    if (rowCellsArray.length < 65) return

    const easyScoresArray = rowCellsArray.splice(8, 18)
    const hardScoresArray = rowCellsArray.splice(8, 18)
    const easyHoleScoreNames = rowCellsArray.splice(19, 18)
    const hardHoleScoreNames = rowCellsArray.splice(19, 18)
    rowCellsArray.splice(rowCellsArray.length - 1, 1)

    const formattedRowObject = {
      easyRoundTotalStrokes: rowCellsArray[0],
      hardRoundTotalStrokes: rowCellsArray[1],
      roundRank: rowCellsArray[2],
      seasonPointsEarned: rowCellsArray[3],
      player: rowCellsArray[4],
      easyRoundScore: rowCellsArray[5],
      hardRoundScore: rowCellsArray[6],
      totalToPar: rowCellsArray[7],
      easyScorecard: easyScoresArray,
      hardScorecard: hardScoresArray,
      numPars: rowCellsArray[8],
      numBirdie: rowCellsArray[9],
      numEagle: rowCellsArray[10],
      numAblatross: rowCellsArray[11],
      numDoubleEagle: rowCellsArray[12],
      numHoleInOne: rowCellsArray[13],
      numBogey: rowCellsArray[14],
      numDoubleBogey: rowCellsArray[15],
      numTripleBogey: rowCellsArray[16],
      numStrokeOut: rowCellsArray[17],
      easyScores: easyHoleScoreNames,
      hardScores: hardHoleScoreNames
    }
    collection.push(formattedRowObject)
    stripPlayerRounds(sheetId, firstRow + 1, collection)
  }
  return collection
}
