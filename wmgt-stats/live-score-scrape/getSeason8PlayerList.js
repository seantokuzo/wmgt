import { season7PlayerList } from './WIP-season7PlayerList.js'
import { allPlayersList } from './AllPlayersList.js'

// console.log(season7PlayerList.length)
// console.log(allPlayersList.length)

const rowIds = {
  season8: '0'
}

const nonCharacterRegex = /[^a-zA-Z0-9]/g

const getPlayerList = (rowId, firstRow, collection = [], nameChangerList = []) => {
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

    if (rowCellsArray.length < 1) return { collection, nameChangerList }

    // console.log(rowCellsArray.length)
    // console.log(rowCellsArray)

    if (rowEl.querySelectorAll('img')[0]) {
      flagImgSrc = rowEl.querySelectorAll('img')[0].src
    } else {
      flagImgSrc = ''
    }

    if (allPlayersList.filter((p) => p.player.replaceAll(nonCharacterRegex, '').toLowerCase() === rowCellsArray[1].replaceAll(nonCharacterRegex, '').toLowerCase())[0]) {
      if (!allPlayersList.filter((p) => p.player === rowCellsArray[1])[0]) {
        nameChangerList.push({
          oldName: allPlayersList.filter((p) => p.player.replaceAll(nonCharacterRegex, '').toLowerCase() === rowCellsArray[1].replaceAll(nonCharacterRegex, '').toLowerCase())[0]
            .player,
          newName: rowCellsArray[1]
        })
      }
      return getPlayerList(rowId, firstRow + 1, collection, nameChangerList)
    }

    const player = {
      player: rowCellsArray[1],
      flag: flagImgSrc
    }

    if (player.flag === '') console.log(player)

    collection.push(player)

    getPlayerList(rowId, firstRow + 1, collection, nameChangerList)
  }

  return { collection, nameChangerList }
}

console.log('Name Changers:', getPlayerList(rowIds.season8, 0).nameChangerList)
console.log('New Player List:', getPlayerList(rowIds.season8, 0).collection)
