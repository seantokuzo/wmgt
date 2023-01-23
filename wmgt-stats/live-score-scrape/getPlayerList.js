import { season7PlayerList } from './WIP-season7PlayerList.js'

console.log(season7PlayerList.length)

const rowIds = {
  season6: '261679476',
  season7: '261679476',
  season8: '261679476'
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

    if (rowCellsArray.length > 27) {
      if (rowEl.querySelectorAll('img')[1]) {
        flagImgSrc = rowEl.querySelectorAll('img')[1].src
      } else {
        flagImgSrc = ''
      }
      rowCellsArray = rowCellsArray.slice(10)
    }
    if (rowCellsArray.length > 24) {
      if (rowEl.querySelectorAll('img')[1]) {
        flagImgSrc = rowEl.querySelectorAll('img')[1].src
      } else {
        flagImgSrc = ''
      }
      rowCellsArray = rowCellsArray.slice(7)
    }
    if (rowCellsArray.length === 18) {
      if (rowEl.querySelectorAll('img')[0]) {
        flagImgSrc = rowEl.querySelectorAll('img')[0].src
      } else {
        flagImgSrc = ''
      }
    }
    if (rowCellsArray.length === 17) {
      if (rowEl.querySelectorAll('img')[0]) {
        flagImgSrc = rowEl.querySelectorAll('img')[0].src
      } else {
        flagImgSrc = ''
      }
      rowCellsArray.unshift('-')
    }
    if (rowCellsArray.length < 17) {
      if (rowEl.querySelectorAll('img')[0]) {
        flagImgSrc = rowEl.querySelectorAll('img')[0].src
      } else {
        flagImgSrc = ''
      }
      rowCellsArray.unshift('-')
      rowCellsArray.unshift('-')
    }

    if (season7PlayerList.filter((p) => p.player === rowCellsArray[3])[0]) {
      return getPlayerList(rowId, firstRow + 1, collection)
    }

    // console.log(rowCellsArray.length)
    // console.log(rowCellsArray)

    const player = {
      player: rowCellsArray[3],
      flag: flagImgSrc
    }

    if (player.flag === '') console.log(player)

    collection.push(player)

    getPlayerList(rowId, firstRow + 1, collection)
  }
  return collection
}

console.log(getPlayerList(rowIds.season7, 6))
