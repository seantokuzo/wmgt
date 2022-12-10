const rowIds = {
  season6: '438689134'
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

    if (rowCellsArray.length < 10) return collection

    if (firstRow <= 36) {
      const flagImgSrc = rowEl.querySelectorAll('img')[1].src
      collection.push({
        player: rowCellsArray[13],
        flag: flagImgSrc
      })
    }
    if (firstRow <= 71 && firstRow > 36) {
      const flagImgSrc = rowEl.querySelectorAll('img')[1].src
      collection.push({
        player: rowCellsArray[10],
        flag: flagImgSrc
      })
    }
    if (firstRow > 71) {
      if (rowEl.querySelectorAll('img')[0]) {
        const flagImgSrc = rowEl.querySelectorAll('img')[0].src
        collection.push({
          player: rowCellsArray[3],
          flag: flagImgSrc
        })
      }
    }
    getPlayerList(rowId, firstRow + 1, collection)
  }
  return collection
}

// console.log(getPlayerList(rowIds.liveScore, 6))
console.log(getPlayerList(rowIds.season6, 6))
