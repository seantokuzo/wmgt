import fs from "fs"
import { parse } from "csv-parse"
import { playerNameExceptions } from "../player-list-scraper-new/playerNameExceptions"

// const csvFile = "./s6r1.csv"
// const writeFileName = "s6r1"

// const csvFile = "./s6r2.csv"
// const writeFileName = "s6r2"

const csvFile = "./s6r3.csv"
const writeFileName = "s6r3"

// const csvFile = "./s6r4.csv"
// const writeFileName = "s6r4"

// const csvFile = "./s6r5.csv"
// const writeFileName = "s6r5"

// const csvFile = "./s6r6.csv"
// const writeFileName = "s6r6"

// const csvFile = "./s6r7.csv"
// const writeFileName = "s6r7"

// const csvFile = "./s6r8.csv"
// const writeFileName = "s6r8"

// const csvFile = "./s6r9.csv"
// const writeFileName = "s6r9"

// const csvFile = "./s7r12.csv"
// const writeFileName = "s7r12"

// const csvFile = "./s8r1.csv"
// const writeFileName = "s8r1"

console.log(parse)

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
