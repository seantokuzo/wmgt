import { DataGod } from 'data/dataGod'
import { SeasonPointsData } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'

export const rankStyle = (rank: number) => {
  return rank === 1
    ? 'bg-amber-400 shadow-insetgold font-bold text-black'
    : rank === 2
    ? 'bg-slate-400 shadow-insetsilver font-bold text-black'
    : rank === 3
    ? 'bg-amber-700 shadow-insetbronze font-bold text-black'
    : rank <= 10
    ? 'bg-lime-400 shadow-insetlime font-bold text-black'
    : ''
  // : rank <= 20
  // ? 'bg-blue-400 shadow-insetcondor font-bold text-black'
  // : rank <= 30
  // ? 'bg-[#f8ff71] shadow-insetyellfocus font-bold text-black'
  // : rank <= 30
  // ? 'border-l-2 border-b-2 border-violet-400'
  // : 'border-l-2 border-b-2'
}

export const roundPointColor = (points: number) => {
  return points === 25
    ? 'bg-amber-400 border-[1px] border-amber-400 shadow-insetgold font-bold text-black'
    : points === 21
    ? 'bg-slate-400 border-[1px] border-slate-400 shadow-insetsilver font-bold text-black'
    : points === 18
    ? 'bg-amber-700 border-[1px] border-amber-700 shadow-insetbronze font-bold text-black'
    : points < 18 && points >= 10
    ? 'bg-lime-400 border-[1px] border-lime-400 shadow-insetlime font-bold text-black'
    : points < 10
    ? 'border-l-2 border-b-2'
    : 'border-l-2 border-b-2'
}

export const getRank = (player: string, seasonData: SeasonPointsData[]): number => {
  const playerPoints = seasonData.filter((p) => p.player === player)[0].totalPoints
  return seasonData.filter((p) => p.totalPoints > playerPoints).length + 1
}

type Props = {
  season: number
}

const SeasonLeaderboardFull: React.FC<Props> = ({ season }) => {
  const seasonPointsData = DataGod.getSeasonSummaryPlayerPoints(season)

  const seasonColor = season === 6 ? 'emerald-500' : season === 7 ? 'indigo-500' : 'orange-500'

  const flex = 'flex justify-center items-center'
  const rankColClasses = 'w-8 h-8 text-base text-center rounded-sm'
  const flagColClasses = 'w-8 ml-4 text-base text-center'
  const playerColClasses = 'w-1/3 ml-4 text-base overflow-hidden'
  const totalColClasses = 'w-8 mr-2 text-base text-center'
  const pointColClasses = 'w-8 h-8 ml-1 text-base text-center rounded-md'

  return (
    <div className="w-[90%] max-w-2xl">
      {/* ****** TABLE LABELS - COLUMN TITLES ****** */}
      <div
        className={`w-full flex justify-evenly items-center bg-${seasonColor} shadow-inset${
          seasonColor.split('-')[0]
        }`}
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
      {seasonPointsData.map((player) => (
        <div className="w-full my-1 flex justify-evenly items-center" key={nanoid()}>
          <div
            className={`${rankColClasses} ${flex} ${rankStyle(
              getRank(player.player, seasonPointsData)
            )}`}
          >
            {getRank(player.player, seasonPointsData)}
          </div>
          <div className={`${flagColClasses} ${flex}`}>{player.flag}</div>
          <div className={`${playerColClasses}`}>{player.player}</div>
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
      ))}
    </div>
  )
}

export default SeasonLeaderboardFull
