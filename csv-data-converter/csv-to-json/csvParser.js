import fs from "fs"
import { parse } from "csv-parse"

// const csvFile = "./s6r1.csv"
// const writeFileName = "s6r1"

// const csvFile = "./s6r2.csv"
// const writeFileName = "s6r2"

const csvFile = "./s6r3.csv"
const writeFileName = "s6r3"

// const csvFile = "./s8r2.csv"
// const writeFileName = "s8r2"

const nonCharacterRegex = /[^a-zA-Z0-9]/g
export const regexPlayerName = (player) => {
  return player.replaceAll(nonCharacterRegex, "").toLowerCase()
}


const playerNameExceptions = (name) => {
  if (regexPlayerName(name) === regexPlayerName("FugoHallerin")) return "FugoHallarin"
  if (regexPlayerName(name) === regexPlayerName("southren_jenn_76")) return "Southern_jenn_76"
  if (regexPlayerName(name) === regexPlayerName("seppemarotta")) return "seppe"
  if (regexPlayerName(name) === regexPlayerName("b0gibo")) return "bogibo"
  if (regexPlayerName(name) === regexPlayerName("Snowraver1")) return "Snow"
  if (regexPlayerName(name) === regexPlayerName("Jorge")) return "ElJorge"
  if (regexPlayerName(name) === regexPlayerName("seve15")) return "Seve"
  if (regexPlayerName(name) === regexPlayerName("GinjaNinja")) return "GingaNinja19"
  if (regexPlayerName(name) === regexPlayerName("TrickDicky")) return "TrickyDicky"
  if (regexPlayerName(name) === regexPlayerName("StevieCymru")) return "SteveSkillman"
  if (regexPlayerName(name) === regexPlayerName("Toaster87")) return "Toaster"
  if (regexPlayerName(name) === regexPlayerName("NickJones5")) return "Nickjone5"

  return name
}


const csvData = []
fs.createReadStream(csvFile)
  .pipe(parse({ delimiter: ":" }))
  .on("data", function (csvrow) {
    const rowArr = csvrow[0].split(",")
    console.log(rowArr)
    if (rowArr[0] === "Pos" || rowArr.length < 10) return
    const formattedPlayerResults = {
      roundRank: +rowArr[0],
      player: playerNameExceptions(rowArr[1]),
      easyScorecard: rowArr.slice(2, 20).map((strNum) => +strNum),
      hardScorecard: rowArr.slice(20, 38).map((strNum) => +strNum),
      easyRoundScore: +rowArr[38],
      hardRoundScore: +rowArr[39],
      totalToPar: +rowArr[40]
    }
    csvData.push(formattedPlayerResults)
  })
  .on("end", function () {
    console.log(csvData)
    fs.writeFile(
      `${writeFileName}-raw-data.json`,
      JSON.stringify(csvData),
      {
        encoding: "utf-8"
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
