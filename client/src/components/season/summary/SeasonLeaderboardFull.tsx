import { useAppContext } from 'context/appContext'
import { DataGod } from 'data/dataGod'
import { SeasonPointsData } from 'data/round-data/roundTypes'
import { seasonToColor } from 'utils/seasonToColor'
import { nanoid } from 'nanoid'

export const rankStyle = (rank: number) => {
  return rank === 1
    ? 'bg-sh-gold font-bold text-black'
    : rank === 2
    ? 'bg-sh-silver font-bold text-black'
    : rank === 3
    ? 'bg-sh-bronze font-bold text-black'
    : rank <= 10
    ? 'bg-sh-topTenGreen font-bold text-black'
    : ''
  // : rank <= 20
  // ? 'bg-blue-400 shadow-condor font-bold text-black'
  // : rank <= 30
  // ? 'bg-[#f8ff71] sh-wmgYellowLg font-bold text-black'
  // : rank <= 30
  // ? 'border-l-2 border-b-2 border-violet-400'
  // : 'border-l-2 border-b-2'
}

export const roundPointColor = (points: number) => {
  return points === 25
    ? 'bg-sh-gold brdr-gold border-[1px] font-bold text-black'
    : points === 21
    ? 'bg-sh-silver brdr-silver border-[1px] font-bold text-black'
    : points === 18
    ? 'bg-sh-bronze brdr-bronze border-[1px] font-bold text-black'
    : points < 18 && points >= 10
    ? 'bg-sh-topTenGreen brdr-topTenGreen border-[1px] font-bold text-black'
    : points < 10
    ? 'border-l-2 border-b-2'
    : 'border-l-2 border-b-2'
}

export const getRank = (player: string, seasonData: SeasonPointsData[]): number => {
  const playerPoints = seasonData.filter((p) => p.player === player)[0].totalPoints
  return seasonData.filter((p) => p.totalPoints > playerPoints).length + 1
}

export type PlayerBasicSeasonInfo = {
  roundPoints: number[]
  totalPoints: number
  player: string
  flag: string
}

type Props = {
  season: number
}

const SeasonLeaderboardFull: React.FC<Props> = ({ season }) => {
  const { userPlayer } = useAppContext()
  // const seasonPointsData = DataGod.getSeasonSummaryPlayerPoints(season)
  const seasonPointsData =
    season === 7
      ? DataGod.getSeasonSummaryPlayerPoints(season)
      : DataGod.getSeasonSummaryFromOfficialResults(season)

  const flex = 'flex justify-center items-center'
  const rankColClasses = 'w-8 h-8 text-sm lg:text-base text-center rounded-md'
  const flagColClasses = 'w-6 lg:w-8 ml-4 text-sm lg:text-base text-center'
  const playerColClasses = 'w-1/3 ml-4 text-sm lg:text-base overflow-hidden'
  const totalColClasses = 'w-6 lg:w-8 mx-4 text-base lg:text-base text-center font-bold'
  const pointColClasses = 'w-8 lg:w-10 h-8 lg:h-10 ml-2 text-sm lg:text-base text-center rounded-md'

  const playerRowEl = (player: PlayerBasicSeasonInfo, isUser = false) => {
    const seasonRank = getRank(player.player, seasonPointsData)

    return (
      <div
        className={`w-full my-2 px-2
        ${
          isUser &&
          `border-l-2 border-b-2 brdr-s${season}
          bg-${seasonToColor(season)}/[0.25] py-2 rounded-md`
        }
        flex justify-evenly items-center`}
        key={nanoid()}
      >
        <div className={`${rankColClasses} ${flex} ${rankStyle(seasonRank)}`}>{seasonRank}</div>
        <div className={`${flagColClasses} ${flex}`}>{player.flag}</div>
        <div
          className={`rounded-sm ${playerColClasses} ${
            player.player === userPlayer &&
            !isUser &&
            seasonRank > 10 &&
            `border-b-2 brdr-s${season} bgfade-s${season}`
          }
          ${
            seasonRank === 1
              ? 'bgfade-gold border-b-2 brdr-gold'
              : seasonRank === 2
              ? 'bgfade-silver border-b-2 brdr-silver'
              : seasonRank === 3
              ? 'bgfade-bronze border-b-2 brdr-bronze'
              : seasonRank <= 10
              ? 'bgfade-topTenGreen border-b-2 brdr-topTenGreen'
              : ''
          }`}
        >
          {player.player}
        </div>
        <div className={`${totalColClasses} ${flex}`}>{player.totalPoints}</div>
        {player.roundPoints.map((point, i) => (
          <div
            className={`${pointColClasses} ${roundPointColor(point)} ${flex} relative
              ${
                DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
                'opacity-25'
              }`}
            key={nanoid()}
          >
            {point}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-[90%] max-w-5xl mt-4">
      {/* ****** TABLE LABELS - COLUMN TITLES ****** */}
      <div
        className={`w-full px-2
        bg-sh-s${season}
        flex justify-evenly items-center`}
      >
        <div className={`${rankColClasses} ${flex}`}>🏁</div>
        <div className={`${flagColClasses} ${flex}`}>🌎</div>
        <div className={`${playerColClasses}`}>PLAYER</div>
        <div
          className={`${totalColClasses}
          ${flex}`}
        >
          ∑
        </div>

        {/* eslint-disable-next-line */}
        {seasonPointsData[0].roundPoints.map((_slot, i) => (
          <div className={`${pointColClasses} ${flex}`} key={nanoid()}>{`R${i + 1}`}</div>
        ))}
      </div>
      {/* ****** PLAYER SEASON POINTS DATA ****** */}
      {userPlayer &&
        seasonPointsData.findIndex((p) => p.player === userPlayer) >= 0 &&
        playerRowEl(seasonPointsData.filter((p) => p.player === userPlayer)[0], true)}
      {seasonPointsData.map((player) => playerRowEl(player))}
    </div>
  )
}

export default SeasonLeaderboardFull
