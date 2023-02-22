import { allPlayersList } from "../../player-list-scraper/AllPlayersList-S8.js"
import {
  regexPlayerName,
  playerNameExceptions,
} from "../../player-list-scraper/playerNameExceptions.js"

const dbRaw = await fetch("./db-raw-data.json")
const dbData = await dbRaw.json()
const officialRaw = await fetch("./official-raw-data.json")
const officialData = await officialRaw.json()
// console.log(dbData)
// console.log(officialData)

const compareResults = (dbData, officialData) => {
  if (dbData.length !== officialData.length) {
    console.log("Different amount of players")
  }

  let DBscoreErrors = []
  let newPlayers = []
  let playerNotInDB = []
  let playerNotReportedInOfficial = []
  // IF PLAYER NOT INCLUDED IN DB - PUSH
  officialData.map((score) => {
    const playerIndex = dbData.findIndex(
      (s) =>
        regexPlayerName(playerNameExceptions(s.player)) ===
        regexPlayerName(playerNameExceptions(score.player))
    )
    if (playerIndex < 0) {
      return playerNotInDB.push(playerNameExceptions(score.player))
    }

    // CHECK SCORES AGAINST EACH OTHER
    const scoreChecks = {
      player: score.player,
      rankCheck: dbData[playerIndex].roundRank === score.roundRank,
      easyCheck: dbData[playerIndex].easyRoundScore === score.easyRoundScore,
      hardCheck: dbData[playerIndex].hardRoundScore === score.hardRoundScore,
      totalCheck:
        dbData[playerIndex].totalToPar === score.totalToPar &&
        score.easyRoundScore + score.hardRoundScore === score.totalToPar,
    }

    if (
      !scoreChecks.rankCheck ||
      !scoreChecks.easyCheck ||
      !scoreChecks.hardCheck ||
      !scoreChecks.totalCheck
    ) {
      DBscoreErrors.push(scoreChecks)
    }

    const dbScore = dbData.filter((p) => p.player === score.player)[0]
  })

  // FIND UNREPORTED SCORES IN OFFICIAL - PUSH
  dbData.map((score) => {
    if (
      officialData.findIndex(
        (s) =>
          regexPlayerName(playerNameExceptions(s.player)) ===
          regexPlayerName(playerNameExceptions(score.player))
      ) < 0
    ) {
      playerNotReportedInOfficial.push(playerNameExceptions(score.player))
    }

    if (
      allPlayersList.findIndex(
        (p) =>
          regexPlayerName(playerNameExceptions(p.player)) ===
          regexPlayerName(playerNameExceptions(score.player))
      ) < 0
    ) {
      newPlayers.push(score.player)
    }
  })

  // FIND NEW PLAYERS

  return {
    playerNotInDB,
    playerNotReportedInOfficial,
    newPlayers,
    DBscoreErrors,
  }
}

console.log(compareResults(dbData, officialData))
