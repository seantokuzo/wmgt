const rowIds = {
  season3: '1124685350',
  season4: '742692426',
  season5: '842171123',
  season6: '438689134'
}

const getPlayerList = (rowId, firstRow, collection = []) => {
  if (document.getElementById(`${rowId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${rowId}R${firstRow}`).parentElement

    let flagImgSrc
    if (!rowEl.querySelectorAll('img')[0]) return collection

    const rowCells = rowEl.querySelectorAll('td')
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }
    // console.log(rowCellsArray)

    if (rowCellsArray.length > 26) {
      rowCellsArray.splice(0, 10)
      if (!rowEl.querySelectorAll('img')[1]) {
        flagImgSrc = rowEl.querySelectorAll('img')[0].src
      } else {
        flagImgSrc = rowEl.querySelectorAll('img')[1].src
      }
    }
    if (rowCellsArray.length > 19) {
      rowCellsArray.splice(0, 7)
      if (!rowEl.querySelectorAll('img')[1]) {
        flagImgSrc = rowEl.querySelectorAll('img')[0].src
      } else {
        flagImgSrc = rowEl.querySelectorAll('img')[1].src
      }
    }
    if (rowCellsArray.length <= 18) {
      flagImgSrc = rowEl.querySelectorAll('img')[0].src
    }

    if (rowCellsArray.length < 15) return collection

    if (rowCellsArray.length === 17) {
      collection.push({
        player: rowCellsArray[2],
        seasonRank: +rowCellsArray[0],
        seasonPoints: +rowCellsArray[3],
        pointsByRound: rowCellsArray.slice(5).map((p) => +p),
        flagLink: flagImgSrc
      })
    } else {
      collection.push({
        player: rowCellsArray[3],
        seasonRank: +rowCellsArray[1],
        seasonPoints: +rowCellsArray[4],
        pointsByRound: rowCellsArray.slice(6).map((p) => +p),
        flagLink: flagImgSrc
      })
    }

    getPlayerList(rowId, firstRow + 1, collection)
  }
  return collection
}

// console.log(getPlayerList(rowIds.season3, 6))
// console.log(getPlayerList(rowIds.season4, 6))
// console.log(getPlayerList(rowIds.season5, 6))
// console.log(getPlayerList(rowIds.season6, 6))
