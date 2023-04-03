import { RoundDetailsMode } from 'context/season/seasonContext'
import { CourseAlias, courseData } from './course-data/wmgt-course-data'
import { allPlayersList, PlayerInterface } from './player-data/AllPlayersList'
import { BadgeRound, PlayerRoundInterface, RoundDataInterface } from './round-data/roundTypes'
import { season1OfficialResults } from './season-data/season1OfficialResults'
import { season2OfficialResults } from './season-data/season2OfficialResults'
import { season3OfficialResults } from './season-data/season3OfficialResults'
import { season4OfficialResults } from './season-data/season4OfficialResults'
import { season5OfficialResults } from './season-data/season5OfficialResults'
import { season6OfficialResults } from './season-data/season6OfficialResults'
import { season7OfficialResults } from './season-data/season7OfficialResults'
import { season8OfficialResults } from './season-data/season8OfficialResults'
import { season5Data } from './round-data/s5-round-data'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'
import { season8Data } from './round-data/s8-round-data'
import {
  PlayerSeasonResultsOfficial,
  SeasonResultsOfficial
} from './season-data/seasonResultsTypes'
import { CURRENT_SEASON } from 'utils/constants'

type RoundIdentifier = {
  season: number
  round: number
}

export type PlayerSeasonAceTotals = { player: string; roundAceCount: number }

const nonCharacterRegex = /[^a-zA-Z0-9]/g

export abstract class DataGod {
  // PRIVATE UTIL METHODS * PRIVATE UTIL METHODS * PRIVATE UTIL METHODS
  static getSeasonData(season: number) {
    switch (season) {
      case 8:
        return season8Data
      case 7:
        return season7Data
      case 6:
        return season6Data
      case 5:
        return season5Data
      default:
        return []
    }
  }

  private static getRoundFromCourse(seasonData: RoundDataInterface[], course: CourseAlias) {
    return seasonData.filter(
      (round) => round.easyCourse === course || round.hardCourse === course
    )[0]
  }

  private static getRoundFromSeason(round: RoundIdentifier) {
    switch (round.season) {
      case 5:
        return season5Data.filter((r) => r.round === round.round)[0]
      case 6:
        return season6Data.filter((r) => r.round === round.round)[0]
      case 7:
        return season7Data.filter((r) => r.round === round.round)[0]
      default:
        return season8Data.filter((r) => r.round === round.round)[0]
    }
  }

  private static getRoundFromRoundNum(seasonData: RoundDataInterface[], round: number) {
    return seasonData.filter((r) => r.round === round)[0]
  }

  private static easyOrHardScorecard(score: PlayerRoundInterface, course: CourseAlias) {
    return course[2] === 'E' ? score.easyScorecard : score.hardScorecard
  }

  private static getAvgsFromScorecards(scorecardArray: number[][]) {
    return new Array(18).fill('').map((_slot, i) => {
      return (
        Math.round(
          (10 *
            scorecardArray.reduce((sum, scorecard) => {
              return scorecard[i] + sum
            }, 0)) /
            scorecardArray.length
        ) / 10
      )
    })
  }

  static getCourseData(course: CourseAlias) {
    return courseData.filter((c) => c.alias === course)[0]
  }

  static getCoursePars(course: CourseAlias) {
    return courseData.filter((c) => c.alias === course)[0].parByHole
  }

  // COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS
  static getCoconutRounds(round: RoundIdentifier) {
    const seasonData = this.getSeasonData(round.season)
    const roundData = seasonData.filter((r) => r.round === round.round)[0]
    const coconutScores = roundData.scores.filter((score) => {
      return (
        score.easyScorecard.every(
          (s, i) => s <= this.getCoursePars(roundData.easyCourse)[i] && s !== 0
        ) &&
        score.hardScorecard.every(
          (s, i) => s <= this.getCoursePars(roundData.hardCourse)[i] && s !== 0
        )
      )
    })
    const stevenTally = roundData.scores.filter((s) => s.coconut)
    if (
      !coconutScores.every((s) => stevenTally.some((player) => player.player === s.player)) &&
      stevenTally.every((s) => coconutScores.some((player) => player.player === s.player))
    ) {
      throw new Error("Steven's cocnuts don't match with DataGod's")
    }
    return {
      ...roundData,
      scores: coconutScores
    }
  }

  // ACES * ACES * ACES * ACES * ACES * ACES * ACES * ACES * ACES * ACES
  static getRoundAcesPerHole(round: RoundIdentifier): {
    easyCourseNumAces: number[]
    hardCourseNumAces: number[]
  } {
    const seasonData = this.getSeasonData(round.season)
    const roundData = seasonData.filter((r) => r.round === round.round)[0]
    const easyScores = roundData.scores.map((s) => s.easyScorecard)
    const hardScores = roundData.scores.map((s) => s.hardScorecard)
    const easyCourseNumAces = new Array(18).fill('').map((_slot, i) => {
      return easyScores.reduce((count, score) => {
        if (score[i] === 1) return count + 1
        return count
      }, 0)
    })
    const hardCourseNumAces = new Array(18).fill('').map((_slot, i) => {
      return hardScores.reduce((count, score) => {
        if (score[i] === 1) return count + 1
        return count
      }, 0)
    })

    return { easyCourseNumAces, hardCourseNumAces }
  }

  // TOP 10 * TOP 10 * TOP 10 * TOP 10 * TOP 10 * TOP 10 * TOP 10
  static getTopTenScores(round: RoundDataInterface, course: CourseAlias) {
    return round.scores
      .filter((score) => score.roundRank <= 10)
      .map((score) => this.easyOrHardScorecard(score, course))
  }

  static getPodiumScores(round: RoundDataInterface) {
    return round.scores.filter((score) => score.roundRank <= 3)
  }

  static getRoundHoleTopTenAvg(season: number, course: CourseAlias): number[] {
    const round = this.getRoundFromCourse(this.getSeasonData(season), course)
    const topTenScores = this.getTopTenScores(round, course)

    return this.getAvgsFromScorecards(topTenScores)
  }

  // FULL FIELD AVERAGES * FULL FIELD AVERAGES * FULL FIELD AVERAGES
  private static getAllScoresForRound(data: RoundDataInterface[], course: CourseAlias) {
    const round = this.getRoundFromCourse(data, course)

    return round.scores.map((score) => this.easyOrHardScorecard(score, course))
  }

  static getRoundHoleAverage(season: number, course: CourseAlias): number[] {
    const allScores = this.getAllScoresForRound(this.getSeasonData(season), course)
    const averageScores = this.getAvgsFromScorecards(allScores)

    return averageScores
  }

  static getRaceToFinishData(round: RoundDataInterface, addedPlayer?: string) {
    const allPars = [
      ...this.getCoursePars(round.easyCourse),
      ...this.getCoursePars(round.hardCourse)
    ]

    const podiumScoresRaw = this.getPodiumScores(round)
    if (podiumScoresRaw.findIndex((p) => p.player === addedPlayer) < 0) {
      podiumScoresRaw.push(...round.scores.filter((p) => p.player === addedPlayer))
    }

    const podiumScores = podiumScoresRaw.map((score) => {
      const holeScores = [...score.easyScorecard, ...score.hardScorecard].map(
        (score, i) => score - allPars[i]
      )
      const scoreTracker = holeScores.map((score, i) => {
        return holeScores.slice(0, i + 1).reduce((sum, curr) => sum + curr, 0)
      })
      return {
        player: score.player,
        scoreTracker: scoreTracker,
        roundRank: score.roundRank,
        medal:
          score.roundRank === 1
            ? '🏆'
            : score.roundRank === 2
            ? '🥈'
            : score.roundRank === 3
            ? '🥉'
            : '',
        coconut: score.coconut
      }
    })

    const starterObject = {
      hole: 'Start',
      ...podiumScores.reduce((acc, score) => {
        return {
          ...acc,
          [score.medal + ' ' + score.player]: 0
        }
      }, {})
    }

    const raceToFinishData = [
      starterObject,
      ...allPars.map((par, i) => {
        const playersObj = podiumScores.reduce((acc, player) => {
          return {
            ...acc,
            [player.medal + ' ' + player.player]: player.scoreTracker[i]
          }
        }, {})
        return {
          hole: `${i + 1}`,
          ...playersObj
        }
      })
    ]
    return raceToFinishData
  }

  static getPlayerScorecard(
    type: 'map' | 'hover' | 'decoration',
    scorecard: number[],
    coursePars: number[],
    playerRound: PlayerRoundInterface,
    roundDetailsMode: RoundDetailsMode,
    windowWidth: number,
    showEasyCourse: boolean,
    showScoreTracker: boolean,
    showFrontNine: boolean
  ): number[] {
    const holeScores = scorecard.map((score, i) => (score === 0 ? 2 : score - coursePars[i]))
    const startingCount =
      showEasyCourse || roundDetailsMode === 'hard' ? 0 : playerRound.easyRoundScore
    const scoreTracker = holeScores.map((score, i) => {
      return holeScores.slice(0, i + 1).reduce((sum, curr) => sum + curr, startingCount)
    })
    if (type === 'map') {
      const scoreToMapFull = showScoreTracker ? scoreTracker : scorecard
      const scoreToMapNine = showFrontNine ? scoreToMapFull.slice(0, 9) : scoreToMapFull.slice(9)
      return windowWidth > 768 ? scoreToMapFull : scoreToMapNine
    }
    if (type === 'hover') {
      const otherScoreFull = !showScoreTracker ? scoreTracker : scorecard
      const otherScoreNine = showFrontNine ? otherScoreFull.slice(0, 9) : otherScoreFull.slice(9)
      return windowWidth > 768 ? otherScoreFull : otherScoreNine
    }
    const holeScoresNine = showFrontNine ? holeScores.slice(0, 9) : holeScores.slice(9)
    return windowWidth > 768 ? holeScores : holeScoresNine
  }

  static getLowestRoundHoleScores(season: number, roundNum: number) {
    const seasonData = this.getSeasonData(season)
    const round = this.getRoundFromRoundNum(seasonData, roundNum)
    const lowestEasyHoleScores = new Array(18).fill('').map((_slot, i) => {
      const holeScores: number[] = round.scores.map((score) => score.easyScorecard[i])
      return Math.min(...holeScores)
    })
    // const easyHoleLowScoreCount =
    const lowestHardHoleScores = new Array(18).fill('').map((_slot, i) => {
      const holeScores: number[] = round.scores.map((score) => score.hardScorecard[i])
      return Math.min(...holeScores)
    })
    // const hardHoleLowScoreCount
    return { lowestEasyHoleScores, lowestHardHoleScores }
  }

  static getCourseLeaderboard(scores: PlayerRoundInterface[], course: 'easy' | 'hard') {
    if (course === 'easy') return scores.sort((a, b) => a.easyRoundScore - b.easyRoundScore)
    return scores.sort((a, b) => a.hardRoundScore - b.hardRoundScore)
  }

  static getRoundPodium(round: RoundIdentifier): {
    gold: PlayerInterface[]
    silver: PlayerInterface[]
    bronze: PlayerInterface[]
  } {
    const roundObject = this.getRoundFromSeason(round)
    const goldMembers = roundObject.scores.filter((score) => score.roundRank === 1)
    const silverMembers = roundObject.scores.filter((score) => score.roundRank === 2)
    const bronzeMembers = roundObject.scores.filter((score) => score.roundRank === 3)

    const getFinishers = (members: [] | PlayerRoundInterface[]) => {
      return members.length === 0
        ? []
        : members
            .map((s) => allPlayersList.filter((p) => p.player === s.player)[0])
            .map((player) => {
              return {
                player: player.player,
                flag: player.flag
              }
            })
    }
    const gold = getFinishers(goldMembers)
    const silver = getFinishers(silverMembers)
    const bronze = getFinishers(bronzeMembers)

    return { gold, silver, bronze }
  }

  static pluckNumber(numberArray: number[], index: number) {
    return [...numberArray.slice(0, index), ...numberArray.slice(index + 1)]
  }

  // TODO - CHATGPT IMPLEMENTATION OF FINDING LOWEST SCORES
  // TODO MORE ACCURATE WITH GOOGLE SHEETS FORMULA
  // TODO MORE TESTING NEEDED - TOTAL POINTS STILL WRONG
  // static seekAndReturnLowest(points: number[]): number[] {
  //   const length = points.length

  //   if (length < 5 || length > 12) {
  //     return []
  //   }

  //   const numLowest = length === 10 ? 2 : length === 11 ? 3 : length === 12 ? 4 : 1

  //   const lowestIndices: number[] = []

  //   for (let i = 0; i < numLowest; i++) {
  //     let lowestIndex = i

  //     for (let j = i + 1; j < length; j++) {
  //       if (points[j] < points[lowestIndex]) {
  //         lowestIndex = j
  //       }
  //     }

  //     lowestIndices.push(lowestIndex)

  //     // Swap current index with lowest index to avoid duplicate indices
  //     ;[points[i], points[lowestIndex]] = [points[lowestIndex], points[i]]
  //   }

  //   return lowestIndices.sort()
  // }

  // static getIndexesOfUnusedSeasonPoints(points: number[]) {
  //   return this.seekAndReturnLowest([...points])
  // }

  static seekAndReturnLowest(points: number[], whichLowest: number): number {
    const sortedPoints = [...points].sort((a, b) => a - b)
    if (whichLowest === 1) {
      return points.indexOf(Math.min(...points))
    }
    if (whichLowest === 2) {
      const sameAsLowest = sortedPoints[0] === sortedPoints[1]
      if (sameAsLowest) {
        // console.log('Same')
        const firstLowestIndex = points.indexOf(sortedPoints[0])
        const plucked = this.pluckNumber(points, firstLowestIndex)
        const secondLowestIndex = plucked.indexOf(Math.min(...plucked)) + 1
        return secondLowestIndex
      }
      return points.indexOf(sortedPoints[1])
    }
    if (whichLowest === 3) {
      const sameSame = sortedPoints[2] === sortedPoints[0] && sortedPoints[2] === sortedPoints[1]
      if (sameSame) {
        // console.log('3rd Lowest Same Same 1st & 2nd')
        const firstLowestIndex = points.indexOf(sortedPoints[0])
        const plucked = this.pluckNumber(points, firstLowestIndex)
        const nextLowestIndex = plucked.indexOf(sortedPoints[1])
        const doublePlucked = this.pluckNumber(plucked, nextLowestIndex)
        const thirdLowestIndex = doublePlucked.indexOf(Math.min(...plucked)) + 2
        return thirdLowestIndex
      }
      const sameAsSecondLowest = sortedPoints[2] === sortedPoints[1]
      if (sameAsSecondLowest) {
        // console.log('3rd Lowest Same as Second Lowest')
        const secondLowestIndex = points.indexOf(sortedPoints[1])
        const plucked = this.pluckNumber(points, secondLowestIndex)
        const thirdLowestIndex = plucked.indexOf(sortedPoints[2]) + 1
        return thirdLowestIndex
      }
      // console.log('Third Lowest Not the Same')
      return points.indexOf(sortedPoints[2])
    }

    // if (whichLowest === 4) {}
    // console.log('Find 4th Lowest Score')
    const allSame = sortedPoints[0] === sortedPoints[3]
    if (allSame) {
      // console.log('All 4 Lowest Scores the Same')
      const plucked = this.pluckNumber(points, points.indexOf(sortedPoints[0]))
      const doublePlucked = this.pluckNumber(plucked, plucked.indexOf(sortedPoints[1]))
      const triplePlucked = this.pluckNumber(doublePlucked, doublePlucked.indexOf(sortedPoints[2]))
      return triplePlucked.indexOf(sortedPoints[3]) + 3
    }
    const threeLowestSame = sortedPoints[1] === sortedPoints[3]
    if (threeLowestSame) {
      // console.log('Last 3 Lowest Scores the Same')
      const plucked = this.pluckNumber(points, points.indexOf(sortedPoints[1]))
      const doublePlucked = this.pluckNumber(plucked, plucked.indexOf(sortedPoints[2]))
      return doublePlucked.indexOf(sortedPoints[3]) + 2
    }
    const lastTwoLowestSame = sortedPoints[2] === sortedPoints[3]
    if (lastTwoLowestSame) {
      // console.log('Last 2 Lowest Scores the Same')
      const plucked = this.pluckNumber(points, points.indexOf(sortedPoints[2]))
      return plucked.indexOf(sortedPoints[3]) + 1
    }
    return points.indexOf(sortedPoints[3])
  }

  static getIndexesOfUnusedSeasonPoints(points: number[]) {
    // console.log(points.length)
    if (points.length <= 2) {
      return []
    }
    if (points.length <= 5) {
      return [this.seekAndReturnLowest([...points], 1)]
    }
    if (points.length <= 7) {
      return [this.seekAndReturnLowest([...points], 1), this.seekAndReturnLowest([...points], 2)]
    }
    if (points.length <= 11) {
      return [
        this.seekAndReturnLowest([...points], 1),
        this.seekAndReturnLowest([...points], 2),
        this.seekAndReturnLowest([...points], 3)
      ]
    }
    // if (points.length === 12) {}
    return [
      this.seekAndReturnLowest(points, 1),
      this.seekAndReturnLowest(points, 2),
      this.seekAndReturnLowest(points, 3),
      this.seekAndReturnLowest(points, 4)
    ]
  }

  static getTotalSeasonPoints(points: number[]) {
    if (points.length <= 2) {
      return points.reduce((a, b) => a + b, 0)
    }
    if (points.length <= 5) {
      return points.slice(1).reduce((a, b) => a + b, 0)
    }
    if (points.length <= 7) {
      return points.slice(2).reduce((a, b) => a + b, 0)
    }
    if (points.length <= 10) {
      return points.slice(3).reduce((a, b) => a + b, 0)
    }
    // if (points.length >= 8) {}
    return points.slice(4).reduce((a, b) => a + b, 0)
  }

  static getSeasonOfficialResultsData(season: number): SeasonResultsOfficial {
    switch (season) {
      case 1:
        return season1OfficialResults
      case 2:
        return season2OfficialResults
      case 3:
        return season3OfficialResults
      case 4:
        return season4OfficialResults
      case 5:
        return season5OfficialResults
      case 6:
        return season6OfficialResults
      case 7:
        return season7OfficialResults
      default:
        return season8OfficialResults
    }
  }

  static getSeasonTopTenRunningPointTotal(season: number, addedPlayer?: string) {
    const topTen = this.getSeasonOfficialResultsData(season).results.filter(
      (player) => player.seasonRank <= 10
    )

    if (topTen.findIndex((p) => p.player === addedPlayer) < 0) {
      topTen.push(
        ...this.getSeasonOfficialResultsData(season).results.filter((p) => p.player === addedPlayer)
      )
    }

    const topTenRunningTotals = topTen.map((player) => {
      const runningTotal = player.pointsByRound.reduce((acc: number[], _curr, i) => {
        const currTotal = this.getTotalSeasonPoints(
          player.pointsByRound.slice(0, i + 1).sort((a, b) => a - b)
        )
        acc.push(currTotal)
        return acc
      }, [])
      return {
        player: player.player,
        // flag: allPlayersList.filter((p) => p.player === player.player)[0].flag || '',
        seasonRank: player.seasonRank,
        runningTotal
      }
    })

    const starterObject = {
      week: 0,
      ...topTenRunningTotals.reduce((acc, player) => {
        const rank =
          player.seasonRank === 1
            ? '🥇'
            : player.seasonRank === 2
            ? '🥈'
            : player.seasonRank === 3
            ? '🥉'
            : player.seasonRank
        return {
          ...acc,
          // [player.seasonRank + ' ' + player.player + ' ' + player.flag]: 0
          [rank + ' ' + player.player]: 0
        }
      }, {})
    }

    const convertedRunningTotal = new Array(topTenRunningTotals[0].runningTotal.length)
      .fill('')
      .map((_slot, i) => {
        return {
          week: i + 1,
          ...topTenRunningTotals.reduce((acc, player) => {
            const rank =
              player.seasonRank === 1
                ? '🥇'
                : player.seasonRank === 2
                ? '🥈'
                : player.seasonRank === 3
                ? '🥉'
                : player.seasonRank
            return {
              ...acc,
              // [player.seasonRank + ' ' + player.player + ' ' + player.flag]: player.runningTotal[i]
              [rank + ' ' + player.player]: player.runningTotal[i]
            }
          }, {})
        }
      })

    // console.log(convertedRunningTotal)

    return [starterObject, ...convertedRunningTotal]
  }

  static tryToConvertPlayerFlag(player: PlayerSeasonResultsOfficial) {
    const knownPlayer = allPlayersList.filter(
      (p) =>
        p.player.replaceAll(nonCharacterRegex, '').toLowerCase() ===
        player.player.replaceAll(nonCharacterRegex, '').toLowerCase()
    )[0]
    if (knownPlayer) {
      return {
        player: knownPlayer.player,
        totalPoints: player.seasonPoints,
        roundPoints: player.pointsByRound,
        flag: knownPlayer.flag
      }
    }
    // CONVERTING FLAGS NOT WORKING - REFINE ALL PLAYERS LIST INSTEAD
    // const flag = flagConverter.filter((f) => f.link === player.flagLink)[0]
    // if (flag) {
    //   return {
    //     player: player.player,
    //     totalPoints: player.seasonPoints,
    //     roundPoints: player.pointsByRound,
    //     flag: flag.flag
    //   }
    // }
    // if (!flag) {
    // console.log('No Flag', player)
    return {
      player: player.player,
      totalPoints: player.seasonPoints,
      roundPoints: player.pointsByRound,
      flag: ''
    }
    // }
  }

  static getSeasonSummaryFromOfficialResults(season: number) {
    const seasonResults = this.getSeasonOfficialResultsData(season)
    return seasonResults.results.map((player) => {
      return this.tryToConvertPlayerFlag(player)
    })
  }

  static getSeasonSummaryPlayerPoints(season: number) {
    const seasonData = this.getSeasonData(season)
    const seasonPlayers = allPlayersList.filter((player) => {
      return seasonData.some((round) => {
        return round.scores.some((score) => {
          return score.player === player.player
        })
      })
    })

    // LOG PLAYERS WHO HAVE NO DATA THIS SEASON
    // const excludedPlayers = allPlayersList
    //   .filter((player) => {
    //     return !seasonData.some((round) => {
    //       return round.scores.some((s) => {
    //         return s.player === player.player
    //       })
    //     })
    //   })
    //   .sort((a, b) => a.player.localeCompare(b.player))
    // console.log('Season Players: ', seasonPlayers)
    // console.log('Excluded Players: ', excludedPlayers)

    const playerSeasonSummaries = seasonPlayers.map((player) => {
      const playerRoundPoints = seasonData.map((round) => {
        if (!round.scores.some((s) => s.player === player.player)) return 0
        return round.scores.filter((s) => s.player === player.player)[0].seasonPointsEarned
      })
      return {
        ...player,
        roundPoints: playerRoundPoints,
        totalPoints: this.getTotalSeasonPoints([...playerRoundPoints].sort((a, b) => a - b))
      }
    })

    return playerSeasonSummaries.sort((a, b) => b.totalPoints - a.totalPoints)
  }

  static getSeasonWinner(season: number) {
    const seasonData = this.getSeasonOfficialResultsData(season)

    if (season === CURRENT_SEASON) {
      return [
        {
          player: 'In Progress',
          totalPoints: 0,
          roundPoints: [],
          flag: 'derp'
        }
      ]
    }

    return seasonData.results
      .filter((player) => player.seasonRank === 1)
      .map((player) => {
        return this.tryToConvertPlayerFlag(player)
      })
  }

  static getSeasonHoleInOneLeaders(season: number) {
    const seasonData = this.getSeasonData(season)

    if (seasonData.length === 0) return []

    const holeInOneCounts = seasonData.map((round) => {
      return (round.scores as PlayerRoundInterface[])
        .reduce((acc: PlayerSeasonAceTotals[], player: PlayerRoundInterface) => {
          const easyAceCount = player.easyScorecard.reduce(
            (aceAcc: number, score: number): number => {
              return score === 1 ? aceAcc + 1 : aceAcc
            },
            0
          )
          const hardAceCount = player.hardScorecard.reduce(
            (aceAcc: number, score: number): number => {
              return score === 1 ? aceAcc + 1 : aceAcc
            },
            0
          )
          return [
            ...acc,
            {
              player: player.player,
              roundAceCount: easyAceCount + hardAceCount
            }
          ]
        }, [])
        .sort((a, b) => b.roundAceCount - a.roundAceCount)
    })

    // console.log(holeInOneCounts)

    const playerSeasonAceTotals = holeInOneCounts.reduce(
      (acc: PlayerSeasonAceTotals[], round: PlayerSeasonAceTotals[]) => {
        round.map((player) => {
          // PLAYER NOT ON ACC YET
          if (acc.findIndex((p) => p.player === player.player) < 0) {
            acc.push(player)
          } else {
            // PLAYER ON ACC ALREADY - ADD TO TOTAL
            const playerAccIndex = acc.findIndex((p) => p.player === player.player)
            acc[playerAccIndex] = {
              player: acc[playerAccIndex].player,
              roundAceCount: acc[playerAccIndex].roundAceCount + player.roundAceCount
            }
          }
        })
        return acc
      },
      []
    )

    const playerSeasonAceTotalsWithRank = playerSeasonAceTotals
      .map((player) => {
        const rank = playerSeasonAceTotals.reduce((acc: number, p) => {
          if (p.roundAceCount > player.roundAceCount) return acc + 1
          return acc
        }, 1)
        return {
          rank,
          flag: allPlayersList.filter((p) => p.player === player.player)[0]
            ? allPlayersList.filter((p) => p.player === player.player)[0].flag
            : '',
          ...player
        }
      })
      .sort((a, b) => a.rank - b.rank)

    return playerSeasonAceTotalsWithRank
  }

  static getCourseRounds = (course: CourseAlias) => {
    const appearedIn = []
    if (course[2] === 'E') {
      // TODO
      // WHEN IN SEASON 9
      // if (season8Data.filter((r) => r.easyCourse === course)[0])
      //   appearedIn.push(season6Data.filter((r) => r.easyCourse === course)[0])
      if (season7Data.filter((r) => r.easyCourse === course)[0])
        appearedIn.push(season7Data.filter((r) => r.easyCourse === course)[0])
      if (season6Data.filter((r) => r.easyCourse === course)[0])
        appearedIn.push(season6Data.filter((r) => r.easyCourse === course)[0])
      if (season5Data.filter((r) => r.easyCourse === course)[0])
        appearedIn.push(season5Data.filter((r) => r.easyCourse === course)[0])
    }
    if (course[2] === 'H') {
      // WHEN IN SEASON 9
      // if (season8Data.filter((r) => r.easyCourse === course)[0])
      //   appearedIn.push(season6Data.filter((r) => r.easyCourse === course)[0])
      if (season7Data.filter((r) => r.hardCourse === course)[0])
        appearedIn.push(season7Data.filter((r) => r.hardCourse === course)[0])
      if (season6Data.filter((r) => r.hardCourse === course)[0])
        appearedIn.push(season6Data.filter((r) => r.hardCourse === course)[0])
      if (season5Data.filter((r) => r.hardCourse === course)[0])
        appearedIn.push(season5Data.filter((r) => r.hardCourse === course)[0])
      // TODO
    }
    return appearedIn
  }

  static convertAllScoresIntoLowestScorePerHoleArray = (allScores: number[][]) => {
    return new Array(18)
      .fill('')
      .map((_slot, i) => {
        return allScores.reduce((acc: number[], score: number[]) => {
          acc.push(score[i])
          return acc
        }, [])
      })
      .map((scores) => Math.min(...scores))
  }

  static countUpLowHoleScorers = (lowScoresArr: number[], allLowScores: number[][]) => {
    return lowScoresArr.map((score, i) => {
      return allLowScores.reduce((acc: number, s: number[]) => {
        if (s[i] === score) return acc + 1
        return acc
      }, 0)
    })
  }

  static getRoundLowScoresPerHole = (season: number, round: number) => {
    const roundData = this.getSeasonData(season).filter((r) => r.round === round)[0]
    const allEasyScores = roundData.scores.map((score) => score.easyScorecard)
    const allHardScores = roundData.scores.map((score) => score.hardScorecard)
    const lowScoresEasy = this.convertAllScoresIntoLowestScorePerHoleArray(allEasyScores)
    const lowScoresHard = this.convertAllScoresIntoLowestScorePerHoleArray(allHardScores)

    return {
      allEasyScores,
      allHardScores,
      lowScoresEasy,
      lowScoresHard
    }
  }

  static getNumPlayersWithHoleLowScore = (season: number, round: number) => {
    const { allEasyScores, allHardScores, lowScoresEasy, lowScoresHard } =
      this.getRoundLowScoresPerHole(season, round)

    const lowScoreCountEasy = this.countUpLowHoleScorers(lowScoresEasy, allEasyScores)
    const lowScoreCountHard = this.countUpLowHoleScorers(lowScoresHard, allHardScores)

    return {
      lowScoresEasy,
      lowScoreCountEasy,
      lowScoresHard,
      lowScoreCountHard
    }
  }

  static getOnlyBadgeRounds = (roundObj: RoundIdentifier): BadgeRound[] => {
    const { season, round } = roundObj
    const roundScores = this.getSeasonData(season).filter((r) => r.round === round)[0].scores
    const { lowScoresEasy, lowScoreCountEasy, lowScoresHard, lowScoreCountHard } =
      this.getNumPlayersWithHoleLowScore(season, round)

    const badgeRoundsRaw = roundScores
      .map((score) => {
        const easyBadges = score.easyScorecard.map((holeScore, i) => {
          if (holeScore === lowScoresEasy[i]) {
            if (lowScoresEasy[i] === 1 && lowScoreCountEasy[i] === 1) return '🌵'
            if (lowScoresEasy[i] === 1 && lowScoreCountEasy[i] === 2) return '🦆'
            if (lowScoresEasy[i] !== 1 && lowScoreCountEasy[i] <= 3) return '🪲'
            return ''
          }
          return ''
        })
        const hardBadges = score.hardScorecard.map((holeScore, i) => {
          if (holeScore === lowScoresHard[i]) {
            if (lowScoresHard[i] === 1 && lowScoreCountHard[i] === 1) return '🌵'
            if (lowScoresHard[i] === 1 && lowScoreCountHard[i] === 2) return '🦆'
            if (lowScoresHard[i] !== 1 && lowScoreCountHard[i] <= 3) return '🪲'
            return ''
          }
          return ''
        })
        return { player: score.player, easyBadges, hardBadges }
      })
      .filter(
        (s) =>
          s.easyBadges.includes('🌵') ||
          s.easyBadges.includes('🦆') ||
          s.easyBadges.includes('🪲') ||
          s.hardBadges.includes('🌵') ||
          s.hardBadges.includes('🦆') ||
          s.hardBadges.includes('🪲')
      )

    // return badgeRounds
    const badgePlayers = badgeRoundsRaw.map((p) => p.player)
    const badgeRounds = roundScores
      .filter((s) => badgePlayers.includes(s.player))
      .map((score) => {
        const playerBadgeData = badgeRoundsRaw.filter((b) => b.player === score.player)[0]
        return {
          ...score,
          easyScorecard: playerBadgeData.easyBadges,
          hardScorecard: playerBadgeData.hardBadges
        }
      })
    return badgeRounds
  }

  static getRoundDiamondWinner = (roundObj: RoundIdentifier) => {
    const { season, round } = roundObj
    const roundScores = this.getSeasonData(season).filter((r) => r.round === round)[0].scores
    const aceData = roundScores.map((score) => {
      return {
        player: score.player,
        numAces:
          score.easyScorecard.reduce((acc, curr) => {
            if (curr === 1) return acc + 1
            return acc
          }, 0) +
          score.hardScorecard.reduce((acc, curr) => {
            if (curr === 1) return acc + 1
            return acc
          }, 0)
      }
    })
    const sortedByAcesCount = aceData.sort((a, b) => b.numAces - a.numAces)
    const diamondWinners = sortedByAcesCount.filter(
      (player) => player.numAces === sortedByAcesCount[0].numAces
    )
    return diamondWinners
  }
}
