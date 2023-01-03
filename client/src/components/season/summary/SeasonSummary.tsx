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
          bg-sh-s${season}`}
      >
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
      {summaryMode === 'stat-leaders' && <ComingSoon text="🔨 Not so Fast 🪚" />}
    </div>
  )
}

export default SeasonSummary
