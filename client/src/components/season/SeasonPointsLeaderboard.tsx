import { useAppContext } from 'context/appContext'
import { DataGod } from 'data/dataGod'
import { nanoid } from 'nanoid'

type Props = {
  season: number
}

const SeasonPointsLeaderboard: React.FC<Props> = ({ season }) => {
  const { windowSize } = useAppContext()
  const seasonPointsData = DataGod.getSeasonSummaryPlayerPoints(season)

  const getRank = (player: string): number => {
    const playerPoints = seasonPointsData.filter((p) => p.player === player)[0].totalPoints
    return seasonPointsData.filter((p) => p.totalPoints > playerPoints).length + 1
  }

  const rankStyle = (rank: number) => {
    return rank === 1
      ? 'bg-amber-400 shadow-insetgold font-bold text-black'
      : rank === 2
      ? 'bg-slate-400 shadow-insetsilver font-bold text-black'
      : rank === 3
      ? 'bg-amber-700 shadow-insetbronze font-bold text-black'
      : rank <= 10
      ? 'bg-lime-400 shadow-insetlime font-bold text-black'
      : rank <= 20
      ? 'border-l-2 border-b-2 border-emerald-400'
      : rank <= 30
      ? 'border-l-2 border-b-2 border-violet-400'
      : 'border-l-2 border-b-2'
  }

  const roundPointColor = (points: number) => {
    return points === 25
      ? 'bg-amber-400 border-amber-400 shadow-insetgold font-bold text-black'
      : points === 21
      ? 'bg-slate-400 border-slate-400 shadow-insetsilver font-bold text-black'
      : points === 18
      ? 'bg-amber-700 border-amber-700 shadow-insetbronze font-bold text-black'
      : points < 18 && points >= 10
      ? 'bg-lime-400 border-lime-400 shadow-insetlime font-bold text-black'
      : points < 10
      ? 'border-l-2 border-b-2'
      : 'border-l-2 border-b-2'
  }

  const flex = 'flex justify-center items-center'
  const rankColSize = 'w-20'
  const flagColSize = 'w-12'
  const playerColSize = 'w-1/4'
  const totalColSizes = 'w-14 h-14'
  const pointColSize = 'w-16 h-16 p-2 m-1 text-center'

  return (
    <div className="w-fit">
      {/* ****** TABLE LABELS - COLUMN TITLES ****** */}
      <div className="w-full flex justify-evenly items-center">
        <div className={`${rankColSize} ${flex}`}>RANK</div>
        <div className={`${flagColSize} ${flex}`}>🌎</div>
        <div className={`${playerColSize}`}>PLAYER</div>
        <div
          className={`${totalColSizes}
          ${flex}`}
        >
          TOTAL
        </div>

        {/* eslint-disable-next-line */}
        {seasonPointsData[0].roundPoints.map((_slot, i) => (
          <div className={`${pointColSize} ${flex}`} key={nanoid()}>{`R${i + 1}`}</div>
        ))}
      </div>
      {/* ****** PLAYER SEASON POINTS DATA ****** */}
      {seasonPointsData.map((player) => (
        <div className="w-full flex justify-evenly items-center" key={nanoid()}>
          <div className={`${rankColSize} ${flex} ${rankStyle(getRank(player.player))}`}>
            {getRank(player.player)}
          </div>
          <div className={`${flagColSize} ${flex}`}>{player.flag}</div>
          <div className={`${playerColSize}`}>{player.player}</div>
          <div className={`${totalColSizes} ${flex}`}>{player.totalPoints}</div>
          {player.roundPoints.map((point, i) => (
            <div
              className={`${pointColSize} ${roundPointColor(point)} ${flex}
              ${
                DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
                'text-red-400'
              }`}
              key={nanoid()}
            >
              {point}
              {/* {point ? point : ''} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SeasonPointsLeaderboard
