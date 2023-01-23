const getSeasonSummary = (rowId, firstRow, collection = []) => {
  if (document.getElementById(`${rowId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${rowId}R${firstRow}`).parentElement
    const rowCells = rowEl.querySelectorAll('td')
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }

    // console.log(rowCellsArray)

    if (rowCellsArray.length < 1) return collection

    collection.push({
      player: rowCellsArray[1],
      seasonRank: +rowCellsArray[0],
      seasonPoints: +rowCellsArray[2],
      pointsByRound: rowCellsArray.slice(3).map((p) => +p)
    })

    getSeasonSummary(rowId, firstRow + 1, collection)
  }
  return collection
}

console.log(getSeasonSummary(0, 0))
