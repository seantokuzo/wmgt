import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'
import SeasonSummaryMenu from './SeasonSummaryMenu'
import SeasonLeaderboardFull from './SeasonLeaderboardFull'
import SeasonLeaderboardSmall from './SeasonLeaderboardSmall'
import ComingSoon from 'components/ComingSoon'

type Props = {
  season: number
}

export type SummaryMode = 'leaderboard' | 'stat-leaders'

const SeasonSummary: React.FC<Props> = ({ season }) => {
  const [summaryMode, setSummaryMode] = useState<SummaryMode>('leaderboard')
  const { windowSize } = useAppContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (season === 6) {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <Link
          to="/season"
          className={`px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          text-white rounded-t-md
          ${
            season === 6 ? 'bg-emerald-500 shadow-insetemerald' : 'bg-indigo-500 shadow-insetindigo'
          }`}
        >
          {/* <i className="fa-solid fa-arrow-left"></i> */}
          <p>SEASON MENU</p>
        </Link>
        <ComingSoon text="Insufficient Data" color="emerald" />
      </div>
    )
  }

  return (
    <div
      className="w-full font-scorenum
      flex flex-col justify-center items-center"
    >
      <Link
        to="/season"
        className={`px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          text-white rounded-md
          ${
            season === 6 ? 'bg-emerald-500 shadow-insetemerald' : 'bg-indigo-500 shadow-insetindigo'
          }`}
      >
        {/* <i className="fa-solid fa-arrow-left"></i> */}
        <p>SEASON MENU</p>
      </Link>
      <SeasonSummaryMenu
        season={season}
        summaryMode={summaryMode}
        setSummaryMode={setSummaryMode}
      />
      {summaryMode === 'leaderboard' && windowSize.width >= 768 && (
        <SeasonLeaderboardFull season={season} />
      )}
      {summaryMode === 'leaderboard' && windowSize.width < 768 && (
        <SeasonLeaderboardSmall season={season} />
      )}
      {summaryMode === 'stat-leaders' && (
        <ComingSoon
          text="🔨 Not so Fast 🪚"
          color={season === 7 ? 'indigo' : season === 6 ? 'emerald' : undefined}
        />
      )}
      {/* {DataGod.getSeasonSummaryPlayerPoints(season).map((player) => (
        <div className="flex justify-center items center" key={nanoid()}>
          <div>{player.flag}</div>
          <div>{player.player}</div>
          <div>{player.totalPoints}</div>
          {player.roundPoints.map((point) => (
            <div className="border-2 p-2" key={nanoid()}>
              {point}
            </div>
          ))}
        </div>
      ))} */}
    </div>
  )
}

export default SeasonSummary
