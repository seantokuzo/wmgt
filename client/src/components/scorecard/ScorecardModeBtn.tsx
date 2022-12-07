type Props = {
  showScoreTracker: boolean
  setShowScoreTracker: React.Dispatch<React.SetStateAction<boolean>>
}

const ScorecardModeBtn: React.FC<Props> = ({ showScoreTracker, setShowScoreTracker }) => {
  return (
    <button className="" onClick={() => setShowScoreTracker(!showScoreTracker)}>
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
