import { SetStateAction } from 'react'
import { SummaryMode } from './SeasonSummary'

type Props = {
  season: number
  summaryMode: SummaryMode
  setSummaryMode: React.Dispatch<SetStateAction<SummaryMode>>
}

const SeasonSummaryMenu: React.FC<Props> = ({ season, summaryMode, setSummaryMode }) => {
  const modeChangeBtn = (mode: SummaryMode, btnText: string) => {
    return (
      <button
        className={`w-full my-2 py-4 px-8
        text-base font-bold
        border-2 brdr-s${season} rounded-lg
        ${summaryMode !== mode && `bg-none`}
        ${summaryMode === mode && `bg-s${season}`}
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
      className="w-max max-w-xl min-w-max px-4
      flex flex-col justify-evenly items-center"
    >
      {modeChangeBtn('leaderboard', 'Leaderboard')}
      {modeChangeBtn('race', 'Race to the Finish')}
    </div>
  )
}

export default SeasonSummaryMenu
