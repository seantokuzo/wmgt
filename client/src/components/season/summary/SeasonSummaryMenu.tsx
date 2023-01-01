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
        className={`w-1/2 min-w-fit my-2 py-4 px-8
        text-base font-bold
        border-2 border-${seasonToColor} rounded-lg
        ${summaryMode !== mode && `bg-none`}
        ${summaryMode === mode && `bg-${seasonToColor} shadow-inset${seasonToColor.split('-')[0]}`}
        flex justify-center items-center
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
      mt-4 px-4
      flex flex-col justify-evenly items-center"
    >
      {modeChangeBtn('leaderboard', 'Leaderboard')}
      {modeChangeBtn('stat-leaders', 'Stat Leaders')}
    </div>
  )
}

export default SeasonSummaryMenu
