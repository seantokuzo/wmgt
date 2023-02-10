import fs from "fs"
import { parse } from "csv-parse"

const csvFileDB = "./DB.csv"
const csvFileOfficial = "./Official.csv"

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

const dbResults = []

await fs
  .createReadStream(csvFileDB)
  .pipe(parse({ delimiter: ":" }))
  .on("data", function (csvRow) {
    const rowArr = csvRow[0].split(",")
    // console.log(rowArr)
    // console.log(rowArr.length)
    if (rowArr[0] === "Pos" || rowArr.length < 40) return
    const formattedPlayerResults = {
      roundRank: +rowArr[0],
      player: playerNameExceptions(rowArr[1]),
      easyRoundScore: +rowArr[38],
      hardRoundScore: +rowArr[39],
      totalToPar: +rowArr[40],
    }
    dbResults.push(formattedPlayerResults)
  })
  .on("end", function () {
    fs.writeFile(
      `db-raw-data.json`,
      JSON.stringify(dbResults),
      {
        encoding: "utf-8",
      },
      (err) => {
        if (err) {
          console.log("Oops, you suck at programming")
          console.log(err)
        } else {
          console.log("File written you sexy beast")
        }
      }
    )
  })

const officialResults = []
fs.createReadStream(csvFileOfficial)
  .pipe(parse({ delimiter: ":" }))
  .on("data", function (csvRow) {
    console.log(csvRow)
    const rowArr = csvRow[0].split(",")
    console.log(rowArr)
    if (rowArr.length < 1) return
    const formattedPlayerResults = {
      roundRank: +rowArr[0],
      player: playerNameExceptions(rowArr[1]),
      easyRoundScore: +rowArr[2],
      hardRoundScore: +rowArr[3],
      totalToPar: +rowArr[4],
    }
    officialResults.push(formattedPlayerResults)
  })
  .on("end", function () {
    fs.writeFile(
      `official-raw-data.json`,
      JSON.stringify(officialResults),
      {
        encoding: "utf-8",
      },
      (err) => {
        if (err) {
          console.log("Oops, you suck at programming")
          console.log(err)
        } else {
          console.log("File written you sexy beast")
        }
      }
    )
  })
