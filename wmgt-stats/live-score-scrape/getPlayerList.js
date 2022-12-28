const rowIds = {
  liveScore: '261679476'
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

    if (rowCellsArray.length < 1) return collection

    if (rowCellsArray.length <= 17) {
      flagImgSrc = rowEl.querySelectorAll('img')[0].src
    }
    if (rowCellsArray.length > 24) {
      flagImgSrc = rowEl.querySelectorAll('img')[1].src
      rowCellsArray = rowCellsArray.slice(10)
    }
    if (rowCellsArray.length > 17) {
      flagImgSrc = rowEl.querySelectorAll('img')[1].src
      rowCellsArray = rowCellsArray.slice(7)
    }

    collection.push({
      player: rowCellsArray[3],
      flag: flagImgSrc
    })

    getPlayerList(rowId, firstRow + 1, collection)
  }
  return collection
}

console.log(getPlayerList(rowIds.liveScore, 6))

const theList = getPlayerList(rowIds.liveScore, 6)
const zdawg = theList.filter((p) => p.player === 'Zanetti')[0]
console.log(zdawg)
const otherSwedes = theList.filter((p) => p.flag === zdawg.flag)
console.log('Other Swedes', otherSwedes)
