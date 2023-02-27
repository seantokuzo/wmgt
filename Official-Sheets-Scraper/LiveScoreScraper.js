import { allPlayersList } from "../player-list-scraper/AllPlayersList-S8.js"
// import {
//   regexPlayerName,
//   playerNameExceptions,
// } from "../csv-data-converter/csv-to-json/csvParser.js"

export const nonCharacterRegex = /[^a-zA-Z0-9]/g
export const regexPlayerName = (player) => {
  return player.replaceAll(nonCharacterRegex, "").toLowerCase()
}

export const playerNameExceptions = (name) => {
  if (regexPlayerName(name) === regexPlayerName("FugoHallerin"))
    return "FugoHallarin"
  if (regexPlayerName(name) === regexPlayerName("southren_jenn_76"))
    return "Southern_jenn_76"
  if (regexPlayerName(name) === regexPlayerName("seppemarotta")) return "seppe"
  if (regexPlayerName(name) === regexPlayerName("b0gibo")) return "bogibo"
  if (regexPlayerName(name) === regexPlayerName("Snowraver1")) return "Snow"
  if (regexPlayerName(name) === regexPlayerName("Jorge")) return "ElJorge"
  if (regexPlayerName(name) === regexPlayerName("seve15")) return "Seve"
  if (regexPlayerName(name) === regexPlayerName("GinjaNinja"))
    return "GingaNinja19"
  if (regexPlayerName(name) === regexPlayerName("TrickDicky"))
    return "TrickyDicky"
  if (regexPlayerName(name) === regexPlayerName("StevieCymru"))
    return "SteveSkillman"
  if (regexPlayerName(name) === regexPlayerName("Toaster87")) return "Toaster"
  if (regexPlayerName(name) === regexPlayerName("NickJones5"))
    return "Nickjone5"
  if (regexPlayerName(name) === regexPlayerName("NickYaHeard")) return "Nick"
  if (regexPlayerName(name) === regexPlayerName("JimiGoes2Vegas"))
    return "JimiGoesToVegas"
  if (regexPlayerName(name) === regexPlayerName("HarrisonJames"))
    return "HarrisonJamesG"
  if (regexPlayerName(name) === regexPlayerName("TommyG123")) return "TommyG"
  if (regexPlayerName(name) === regexPlayerName("Brad91")) return "Brad."
  if (regexPlayerName(name) === regexPlayerName("Brad")) return "Brad."
  if (regexPlayerName(name) === regexPlayerName("Stewiestewie")) return "Stewie"
  if (regexPlayerName(name) === regexPlayerName("Yodamuffin")) return "Yoda"

  return name
}

const getSeasonSummary = (rowId, firstRow, collection = []) => {
  if (document.getElementById(`${rowId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${rowId}R${firstRow}`).parentElement
    const rowCells = rowEl.querySelectorAll("td")
    let rowCellsArray = []
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim())
      }
    }

    // console.log(rowCellsArray)

    if (rowCellsArray.length < 1) return collection

    let player
    if (
      allPlayersList.filter(
        (p) =>
          regexPlayerName(p.player) ===
          regexPlayerName(playerNameExceptions(rowCellsArray[1]))
      )[0]
    ) {
      player = allPlayersList.filter(
        (p) =>
          regexPlayerName(p.player) ===
          regexPlayerName(playerNameExceptions(rowCellsArray[1]))
      )[0].player
    }

    if (!player) return console.log(player)

    collection.push({
      player,
      seasonRank: +rowCellsArray[0],
      seasonPoints: +rowCellsArray[2],
      pointsByRound: rowCellsArray.slice(3).map((p) => +p),
    })

    getSeasonSummary(rowId, firstRow + 1, collection)
  }
  return collection
}

const withoutRank = getSeasonSummary(0, 0)

const sortedResults = withoutRank.sort(
  (a, b) => b.seasonPoints - a.seasonPoints
)

const rankAdded = sortedResults.map((player) => {
  const rank = sortedResults.reduce((acc, s) => {
    return s.seasonPoints > player.seasonPoints ? acc + 1 : acc
  }, 1)
  return {
    ...player,
    seasonRank: rank,
  }
})
console.log(rankAdded)

// const withRank =
