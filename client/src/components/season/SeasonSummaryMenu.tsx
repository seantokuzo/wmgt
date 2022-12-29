import { SetStateAction } from 'react'
import { SummaryMode } from './SeasonSummary'

type Props = {
  season: number
  summaryMode: SummaryMode
  setSummaryMode: React.Dispatch<SetStateAction<SummaryMode>>
}

const SeasonSummaryMenu: React.FC<Props> = ({ season, summaryMode, setSummaryMode }) => {
  const seasonToColor = season === 6 ? 'emerald-500' : 'indigo-500'

  const modeChangeBtn = (mode: SummaryMode, btnText: string) => {
    return (
      <button
        className={`border-2 border-${seasonToColor}
        py-4 px-8 rounded-lg
        ${summaryMode !== mode && `bg-none`}
        ${summaryMode === mode && `bg-${seasonToColor} shadow-inset${seasonToColor.split('-')[0]}`}
        flex justify-center items center
        `}
        onClick={() => setSummaryMode(mode)}
      >
        {btnText}
      </button>
    )
  }

  return (
    <div
      className="w-full max-w-xl
      my-6
      flex justify-evenly items-center"
    >
      {modeChangeBtn('leaderboard', 'Season Leaderboard')}
      {modeChangeBtn('stat-leaders', 'Stat Leaders')}
    </div>
  )
}

export default SeasonSummaryMenu
