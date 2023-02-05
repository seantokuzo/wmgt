import { s8r3_DB } from "./S8R3_DB.csv-raw-data.js"
import { s8r3_Official } from "./S8R3_Official.csv-raw-data.js"
import { allPlayersList } from "../../player-list-scraper/AllPlayersList-S8R2.js"

const objKeys = Object.keys(s8r3_DB[0])
console.log(objKeys)

const nonCharacterRegex = /[^a-zA-Z0-9]/g
export const regexPlayerName = (player) => {
  return player.replaceAll(nonCharacterRegex, "").toLowerCase()
}

const playerNameExceptions = (name) => {
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

  return name
}

const compareResults = (dbData, officialData) => {
  if (dbData.length !== officialData.length) {
    console.log("Different amount of players")
  }

  let scoreErrors = []
  let newPlayers = []
  let playerNotInDB = []
  let playerNotReportedInOfficial = []
  // IF PLAYER NOT INCLUDED IN DB - PUSH
  s8r3_Official.map((score) => {
    if (
      s8r3_DB.findIndex(
        (s) =>
          regexPlayerName(playerNameExceptions(s.player)) ===
          regexPlayerName(playerNameExceptions(score.player))
      ) < 0
    ) {
      playerNotInDB.push(playerNameExceptions(score.player))
    }

    const dbScore = s8r3_DB.filter((p) => p.player === score.player)[0]
  })

  // FIND UNREPORTED SCORES IN OFFICIAL - PUSH
  s8r3_DB.map((score) => {
    if (
      s8r3_Official.findIndex(
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
    scoreErrors,
  }
}

console.log(compareResults(s8r3_DB, s8r3_Official))
