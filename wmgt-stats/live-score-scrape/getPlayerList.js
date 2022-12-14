const rowIds = {
  liveScore: '261679476'
}

const getPlayerList = (rowId, firstRow, collection = []) => {
  if (document.getElementById(`${rowId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${rowId}R${firstRow}`).parentElement

    if (!rowEl.querySelectorAll('img')[0]) return collection
    const flagImgSrc = rowEl.querySelectorAll('img')[0].src

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
      player: rowCellsArray[3],
      flag: flagImgSrc
    })

    getPlayerList(rowId, firstRow + 1, collection)
  }
  return collection
}

console.log(getPlayerList(rowIds.liveScore, 6))
