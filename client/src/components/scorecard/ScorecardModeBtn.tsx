import { useSeasonContext } from 'context/season/seasonContext'

const ScorecardModeBtn: React.FC = () => {
  const { showScoreTracker, toggleScoreTracker } = useSeasonContext()

  return (
    <button className="" onClick={toggleScoreTracker}>
      <span className={`py-1 px-3 rounded-md ${showScoreTracker && 'bg-[#f8ff71] text-[#38280e]'}`}>
        SCORE TRACKER
      </span>{' '}
      |{' '}
      <span
        className={`py-1 px-3 rounded-md ${!showScoreTracker && 'bg-[#f8ff71] text-[#38280e]'}`}
      >
        SCORECARD
      </span>
    </button>
  )
}

export default ScorecardModeBtn
