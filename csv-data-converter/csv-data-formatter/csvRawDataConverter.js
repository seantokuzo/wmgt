// import { s6r5csvData } from './s6r5-raw-data.js'
// import { s6r6csvData } from './s6r6-raw-data.js'
// import { s6r7csvData } from './s6r7-raw-data.js'
// import { s6r8csvData } from './s6r8-raw-data.js'
// import { s6r9csvData } from './s6r9-raw-data.js'
// import { s7r12csvData } from './s7r12-raw-data.js'
// import { s8r1csvData } from './s8r1-raw-data.js'
import { s8r2csvData } from "./s8r2-raw-data.js"
import { courseData } from "./wmgt-course-data.js"
import { allPlayersList } from "../../player-list-scraper/AllPlayersList-S8R2.js"
import { playerNameExceptions } from "../../player-list-scraper/playerNameExceptions.js"
import { regexPlayerName } from "../../player-list-scraper/regexPlayerName.js"

const nonCharacterRegex = /[^a-zA-Z0-9]/g

// GET COURSE DATA FOR CURRENT ROUND COURSES
const easyCourse = courseData.filter((c) => c.alias === "MYE")[0]
const hardCourse = courseData.filter((c) => c.alias === "GBH")[0]

const checkScores = (csvData) => {
  // CHECK FOR ANY DUPLICATE PLAYERS
  const duplicatePlayers = csvData.reduce((acc, curr, i) => {
    const withoutPlayer = [...csvData]
    withoutPlayer.splice(i, 1)
    if (withoutPlayer.every((score) => score.player !== curr.player)) {
      return acc
    } else {
      return [...acc, curr.player]
    }
  }, [])
  console.log("Duplicate Players: ", duplicatePlayers)

  // CHECK IF SUM OF HOLE SCORES MATCHES TOTAL SCORE
  // RETURN ALL SCORES WITH BOOLEAN WHETHER EASY AND HARD PASS CHECK
  const scoreCheck = csvData.map((score) => {
    const easy =
      score.easyScorecard.reduce((a, b) => a + b, 0) - easyCourse.par ===
      score.easyRoundScore
    const hard =
      score.hardScorecard.reduce((a, b) => a + b, 0) - hardCourse.par ===
      score.hardRoundScore
    return { player: score.player, easy, hard }
  })

  // LOG IF SCORES PASS CHECK
  // IF ANY SCORES FAIL CHECK, LOG THAT PLAYER WITH WHICH COURSE FAILS TEST
  const quickieCheck = scoreCheck.every((score) => score.easy && score.hard)
  console.log(
    quickieCheck ? "No Problems" : "Uh oh, better double check them scores"
  )
  const problemScores = scoreCheck.filter((score) => {
    return !score.easy || !score.hard
  })
  console.log("Problem Scores: ", problemScores)
}

// CONVERT THE RAW DATA PULLED FROM CSV INTO MY FORMAT
const convertRawRoundData = (csvData) => {
  const withoutRankOrPoints = csvData.map((score) => {
    const easyScores = score.easyScorecard.map(
      (score, i) => score - easyCourse.parByHole[i]
    )
    const hardScores = score.hardScorecard.map(
      (score, i) => score - hardCourse.parByHole[i]
    )
    const playerName = allPlayersList.filter(
      (p) =>
        p.player.replaceAll(nonCharacterRegex, "").toLowerCase() ===
        score.player.replaceAll(nonCharacterRegex, "").toLowerCase()
    )[0]
    return {
      roundRank: 1,
      player: playerName
        ? playerNameExceptions(playerName.player)
        : playerNameExceptions(score.player),
      easyRoundTotal: score.easyScorecard.reduce((a, b) => a + b, 0),
      hardRoundTotal: score.hardScorecard.reduce((a, b) => a + b, 0),
      seasonPointsEarned: 1,
      easyRoundScore: score.easyRoundScore,
      hardRoundScore: score.hardRoundScore,
      totalToPar: score.easyRoundScore + score.hardRoundScore,
      coconut:
        easyScores.every((s) => s <= 0) && hardScores.every((s) => s <= 0),
      easyScorecard: score.easyScorecard,
      hardScorecard: score.hardScorecard,
      numPar:
        easyScores.reduce((acc, curr) => {
          return curr === 0 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === 0 ? acc + 1 : acc
        }, 0),
      numBirdie:
        easyScores.reduce((acc, curr) => {
          return curr === -1 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === -1 ? acc + 1 : acc
        }, 0),
      numEagle:
        easyScores.reduce((acc, curr) => {
          return curr === -2 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === -2 ? acc + 1 : acc
        }, 0),
      numAlbatross:
        easyScores.reduce((acc, curr) => {
          return curr === -3 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === -3 ? acc + 1 : acc
        }, 0),
      numCondor:
        easyScores.reduce((acc, curr) => {
          return curr === -4 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === -4 ? acc + 1 : acc
        }, 0),
      numHoleInOne:
        score.easyScorecard.reduce((acc, curr) => {
          return curr === 1 ? acc + 1 : acc
        }, 0) +
        score.hardScorecard.reduce((acc, curr) => {
          return curr === 1 ? acc + 1 : acc
        }, 0),
      numBogey:
        easyScores.reduce((acc, curr) => {
          return curr === 1 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === 1 ? acc + 1 : acc
        }, 0),
      numDoubleBogey:
        easyScores.reduce((acc, curr) => {
          return curr === 2 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === 2 ? acc + 1 : acc
        }, 0),
      numTripleBogey:
        easyScores.reduce((acc, curr) => {
          return curr === 3 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === 3 ? acc + 1 : acc
        }, 0),
      numStrokeOut:
        easyScores.reduce((acc, curr) => {
          return curr === 4 ? acc + 1 : acc
        }, 0) +
        hardScores.reduce((acc, curr) => {
          return curr === 4 ? acc + 1 : acc
        }, 0),
    }
  })
  // console.log(withoutRankOrPoints)

  // SORT SCORES BY TOTAL SCORE
  const sortedByScore = withoutRankOrPoints.sort(
    (a, b) => a.totalToPar - b.totalToPar
  )

  // ADD ROUND RANKING BASED ON HOW MANY TOTAL SCORES ARE BETTER
  const rankAdded = sortedByScore.map((score) => {
    const rank = csvData.reduce((acc, s) => {
      return s.totalToPar < score.totalToPar ? acc + 1 : acc
    }, 1)
    return {
      ...score,
      roundRank: rank,
    }
  })
  console.log(rankAdded)
}

checkScores(s8r2csvData)
convertRawRoundData(s8r2csvData)

// checkScores(s8r1csvData)
// convertRawRoundData(s8r1csvData)

// checkScores(s7r12csvData)
// convertRawRoundData(s7r12csvData)

// checkScores(s6r9csvData)
// convertRawRoundData(s6r9csvData)

// checkScores(s6r8csvData)
// convertRawRoundData(s6r8csvData)

// checkScores(s6r7csvData)
// convertRawRoundData(s6r7csvData)

// checkScores(s6r6csvData)
// convertRawRoundData(s6r6csvData)

// checkScores(s6r5csvData)
// convertRawRoundData(s6r5csvData)