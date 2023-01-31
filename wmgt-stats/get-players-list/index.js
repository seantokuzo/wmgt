const sheetIds = {
  R1: '430215781',
  R2: '1632913315',
  R3: '1277572209',
  R4: '398971102',
  R5: '1517004937',
  R6: '502817299',
  R7: '283795469',
  R8: '597233959'
}
const rounds = Object.keys(sheetIds)

const getRoundResults = (season, sheetId, firstRow, collection = []) => {
  if (document.getElementById(`${sheetId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${sheetId}R${firstRow}`).parentElement

    const rowCells = rowEl.querySelectorAll('td')
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }

    if (rowCellsArray.length < 10) return collection

    collection.push({
      season,
      round: +rounds.filter((r) => sheetIds[r] === sheetId)[0][1],
      rank: +rowCellsArray[0],
      player: rowCellsArray[2],
      easyScore: +rowCellsArray[3],
      hardScore: +rowCellsArray[4],
      totalScore: +rowCellsArray[5]
    })

    getRoundResults(season, sheetId, firstRow + 1, collection)
  }
  return collection
}

// console.log(getRoundResults(7, sheetIds.R1, 6))
// console.log(getRoundResults(7, sheetIds.R2, 6))
// console.log(getRoundResults(7, sheetIds.R3, 6))
console.log(getRoundResults(7, sheetIds.R4, 6))
// console.log(getRoundResults(7, sheetIds.R5, 6))
// console.log(getRoundResults(7, sheetIds.R6, 6))
// console.log(getRoundResults(7, sheetIds.R7, 6))
// console.log(getRoundResults(7, sheetIds.R8, 6))
