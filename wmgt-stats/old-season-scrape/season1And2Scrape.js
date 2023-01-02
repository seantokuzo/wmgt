console.log('Hello')

const rowIds = {
  season1: '2079650930',
  season2: '872708351'
}

const getPlayerList = (rowId, firstRow, collection = []) => {
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

    if (rowCellsArray.length > 25) {
      rowCellsArray.splice(0, 10)
    } else if (rowCellsArray.length > 19) {
      rowCellsArray.splice(0, 7)
    } else if (rowCellsArray.length === 17) {
      rowCellsArray.splice(0, 1)
    }
    // console.log(rowCellsArray)

    if (rowCellsArray.length < 15) return collection

    collection.push({
      player: rowCellsArray[1],
      seasonRank: +rowCellsArray[0],
      seasonPoints: +rowCellsArray[2],
      pointsByRound: rowCellsArray.slice(4).map((p) => +p)
    })

    getPlayerList(rowId, firstRow + 1, collection)
  }
  return collection
}

console.log(getPlayerList(rowIds.season1, 6))
// console.log(getPlayerList(rowIds.season2, 6))
