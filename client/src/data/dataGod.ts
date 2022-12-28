import { RoundDetailsMode } from 'context/season/seasonContext'
import { CourseAlias, courseData } from './course-data/wmgt-course-data'
import { allPlayersList, PlayerInterface } from './player-data/AllPlayersList'
import { PlayerRoundInterface, RoundDataInterface } from './round-data/roundTypes'
import { season6Data } from './round-data/s6-round-data'
import { season7Data } from './round-data/s7-round-data'

type RoundIdentifier = {
  season: number
  round: number
}

export abstract class DataGod {
  // PRIVATE UTIL METHODS * PRIVATE UTIL METHODS * PRIVATE UTIL METHODS
  private static getSeasonData(season: number) {
    switch (season) {
      case 7:
        return season7Data
      case 6:
        return season6Data
      default:
        return season7Data
    }
  }

  private static getRoundFromCourse(seasonData: RoundDataInterface[], course: CourseAlias) {
    return seasonData.filter(
      (round) => round.easyCourse === course || round.hardCourse === course
    )[0]
  }

  private static getRoundFromSeason(round: { season: number; round: number }) {
    if (round.season === 6) {
      return season6Data.filter((r) => r.round === round.round)[0]
    }
    return season7Data.filter((r) => r.round === round.round)[0]
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

  static getCoursePars(course: CourseAlias) {
    return courseData.filter((c) => c.alias === course)[0].parByHole
  }

  // COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS * COCONUTS
  static getCoconutRounds(round: RoundIdentifier) {
    const seasonData = this.getSeasonData(round.season)
    const roundData = seasonData.filter((r) => r.round === round.round)[0]
    const coconutScores = roundData.scores.filter((score) => {
      return (
        score.easyScorecard.every((s, i) => s <= this.getCoursePars(roundData.easyCourse)[i]) &&
        score.hardScorecard.every((s, i) => s <= this.getCoursePars(roundData.hardCourse)[i])
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

  static getRaceToFinishData(round: RoundDataInterface) {
    const allPars = [
      ...this.getCoursePars(round.easyCourse),
      ...this.getCoursePars(round.hardCourse)
    ]

    const podiumScores = this.getPodiumScores(round).map((score) => {
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
        medal: score.roundRank === 1 ? '🏆' : score.roundRank === 2 ? '🥈' : '🥉',
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
    const holeScores = scorecard.map((score, i) => score - coursePars[i])
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

  static getRoundPodium(round: { season: number; round: number }): {
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

  static getSeasonSummaryPlayerPoints(season: number) {
    const seasonData = this.getSeasonData(season)
    const seasonPlayers = allPlayersList.filter((player) => {
      return seasonData.some((round) => {
        return round.scores.some((score) => {
          return score.player === player.player
        })
      })
    })
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

      return { ...player, roundPoints: playerRoundPoints }
    })

    return playerSeasonSummaries
  }
}
