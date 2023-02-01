import { flagConverter } from "./flagConverter.js"
import { allPlayersList } from "./AllPlayersList-S8R2.js"
import { playerNameExceptions } from "./playerNameExceptions.js"
import { regexPlayerName } from "./regexPlayerName.js"

const getPlayerList = (rowId, firstRow, collection = []) => {
  if (document.getElementById(`${rowId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${rowId}R${firstRow}`).parentElement

    let flagImgSrc
    // if (!rowEl.querySelectorAll("img")[0]) return collection

    const rowCells = rowEl.querySelectorAll("td")
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }

    // RETURN COLLECTION AFTER LAST ROW READ
    if (rowCellsArray.length < 1) return collection

    // CHECK FOR NAME EXCEPTIONS - IF PLAYER EXISTS SKIP TO NEXT
    if (
      allPlayersList.filter(
        (p) =>
          regexPlayerName(p.player) ===
          regexPlayerName(playerNameExceptions(rowCellsArray[1]))
      )[0]
    ) {
      return getPlayerList(rowId, firstRow + 1, collection)
    }

    // IF PLAYER EXISTS ON PLAYER LIST - SKIP TO NEXT ROW
    if (
      allPlayersList.filter(
        (p) => regexPlayerName(p.player) === regexPlayerName(rowCellsArray[1])
      )[0]
    ) {
      return getPlayerList(rowId, firstRow + 1, collection)
    }

    // CHECK FOR FLAG LINK - IF NONE FLAG = EMPTY STRING
    if (rowEl.querySelectorAll("img")[0]) {
      flagImgSrc = rowEl.querySelectorAll("img")[0].src
    } else {
      flagImgSrc = ""
    }

    // IF FLAG NOT FOUND LOG THE PLAYER AND ADD TO CONVERTER
    if (!flagConverter.filter((f) => f.link === flagImgSrc)[0]) {
      console.log({
        player: rowCellsArray[1],
        flagLink: flagImgSrc,
      })
    }

    // IF ALL CHECKS PASS - ADD PLAYER TO NEW PLAYER COLLECTION
    const player = {
      player: rowCellsArray[1],
      flag: flagConverter.filter((f) => f.link === flagImgSrc)[0]
        ? flagConverter.filter((f) => f.link === flagImgSrc)[0].flag
        : "",
    }

    collection.push(player)

    getPlayerList(rowId, firstRow + 1, collection)
  }

  return collection
}

console.log("New Player List:", getPlayerList(0, 0))
