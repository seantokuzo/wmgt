import fs from "fs"
import { parse } from "csv-parse"
// const csvFile = "./s6r8.csv"
// const csvFile = "./s6r9.csv"
// const csvFile = "./s7r12.csv"
const csvFile = "./s8r1.csv"

// const writeFileName = "s6r8"
// const writeFileName = "s6r9"
// const writeFileName = "s7r12"
const writeFileName = "s8r1"

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
      player: rowArr[1],
      easyScorecard: rowArr.slice(2, 20).map((strNum) => +strNum),
      hardScorecard: rowArr.slice(20, 38).map((strNum) => +strNum),
      easyRoundScore: +rowArr[38],
      hardRoundScore: +rowArr[39],
      totalToPar: +rowArr[40]
    }
    csvData.push(formattedPlayerResults)
    //do something with csvrow
  })
  .on("end", function () {
    //do something with csvData
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
