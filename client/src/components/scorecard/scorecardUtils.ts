import { season6Data } from 'data/round-data/s6-round-data'
import { season7Data } from 'data/round-data/s7-round-data'

import { allPlayersList, flagConverter, PlayerInterface } from 'data/player-data/AllPlayersList'
import { PlayerRoundInterface } from 'data/round-data/roundTypes'

export const scoreDecoration = (score: number, outer: boolean, darkMode: boolean) => {
  if (score === 0) return ''
  const decorations = 'border-[1px]'
  if (score <= -4) {
    return decorations + ' border-blue-400 bg-blue-400 rounded-full'
  }
  if (score === -3) {
    if (outer) return decorations + ' border-red-400 bg-red-400 rounded-[50%]'
    return decorations + ` border-red-400 rounded-[50%] ${darkMode ? 'bg-black' : 'bg-white'}`
  }
  if (score === -2) {
    return decorations + ' border-red-400 rounded-[50%]'
  }
  if (score === -1) {
    if (outer) return ''
    return decorations + ' border-red-400 border-[1px] rounded-[50%]'
  }
  if (score === 1) {
    if (outer) return ''
    return decorations + ' border-lime-700'
  }
  if (score === 2) {
    return decorations + ' border-lime-700'
  }
  if (score === 3) {
    if (outer) return decorations + 'border-lime-700 bg-lime-700'
    return decorations + ` border-lime-700 ${darkMode ? 'bg-black' : 'bg-white'}`
  }
  if (score >= 4) {
    if (!outer) return darkMode ? 'text-black' : 'text-white'
    return decorations + 'border-lime-700 bg-lime-700'
  }
}

export abstract class ScorecardUtil {
  private static getPlayerFlag(link: string) {
    return flagConverter.filter((f) => f.link === link).length > 0
      ? flagConverter.filter((f) => f.link === link)[0].flag
      : ''
  }

  private static getRound(round: { season: number; round: number }) {
    if (round.season === 6) {
      return season6Data.filter((r) => r.round === round.round)[0]
    }
    return season7Data.filter((r) => r.round === round.round)[0]
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
    const roundObject = this.getRound(round)

    const goldMembers = roundObject.scores.filter((score) => score.roundRank === 1)
    const silverMembers = roundObject.scores.filter((score) => score.roundRank === 2)
    const bronzeMembers = roundObject.scores.filter((score) => score.roundRank === 3)
    const getFinishers = (members: [] | PlayerRoundInterface[]) => {
      return members.length === 0
        ? []
        : members
            .map((s) => allPlayersList.filter((p) => p.player === s.player)[0])
            .map((player) => {
              console.log(
                player,
                flagConverter.some((p) => p.link === player.flag)
              )
              return {
                player: player.player,
                flag: this.getPlayerFlag(player.flag)
              }
            })
    }
    const gold = getFinishers(goldMembers)
    const silver = getFinishers(silverMembers)
    const bronze = getFinishers(bronzeMembers)

    console.log({ gold, silver, bronze })
    return { gold, silver, bronze }
  }
}
